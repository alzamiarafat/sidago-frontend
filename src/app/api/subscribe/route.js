const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_NEWSLETTERS = new Set(["market-updates", "research-insights"]);

function validateSubscribePayload({ email, newsletters }) {
  const normalizedEmail = String(email ?? "")
    .trim()
    .toLowerCase();

  if (!normalizedEmail) {
    return { error: "Email is required." };
  }

  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    return { error: "Please enter a valid email address." };
  }

  const selected = Array.isArray(newsletters)
    ? newsletters.filter((id) => ALLOWED_NEWSLETTERS.has(id))
    : [];

  if (!selected.length) {
    return { error: "Please select at least one newsletter." };
  }

  return {
    email: normalizedEmail,
    newsletters: selected,
  };
}

function mapNewsletters(newsletters) {
  return {
    marketUpdates: newsletters.includes("market-updates"),
    researchInsights: newsletters.includes("research-insights"),
  };
}

async function parseStrapiResponse(response) {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { error: { message: text } };
  }
}

function extractStrapiError(payload, fallback) {
  if (typeof payload?.error === "string") {
    return payload.error;
  }

  if (payload?.error?.message) {
    return payload.error.message;
  }

  if (Array.isArray(payload?.error?.details?.errors)) {
    return payload.error.details.errors
      .map((item) => item.message)
      .filter(Boolean)
      .join(" ");
  }

  return fallback;
}

async function postToStrapi(strapiUrl, path, body, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${strapiUrl}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const payload = await parseStrapiResponse(response);

  return { response, payload };
}

async function saveSubscription(strapiUrl, token, validated, sourcePage) {
  const subscribePayload = {
    data: {
      email: validated.email,
      newsletters: validated.newsletters,
      sourcePage,
    },
  };

  const createPayload = {
    data: {
      email: validated.email,
      ...mapNewsletters(validated.newsletters),
      sourcePage,
    },
  };

  const attempts = [
    { path: "/api/newsletter-subscriptions/subscribe", body: subscribePayload },
  ];

  if (token) {
    attempts.push({ path: "/api/newsletter-subscriptions", body: createPayload });
  }

  let lastResult = null;

  for (const attempt of attempts) {
    const result = await postToStrapi(
      strapiUrl,
      attempt.path,
      attempt.body,
      attempt.path.endsWith("/subscribe") ? "" : token,
    );
    lastResult = result;

    if (result.response.ok) {
      return result;
    }

    const status = result.response.status;

    if (status !== 401 && status !== 403 && status !== 404 && status !== 405) {
      return result;
    }
  }

  return lastResult;
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const validated = validateSubscribePayload(body);

  if (validated.error) {
    return Response.json({ error: validated.error }, { status: 400 });
  }

  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "");
  const strapiToken = process.env.STRAPI_API_TOKEN?.trim();

  if (!strapiUrl) {
    return Response.json(
      { error: "Subscription service is unavailable." },
      { status: 503 },
    );
  }

  const sourcePage =
    typeof body.sourcePage === "string" && body.sourcePage.trim()
      ? body.sourcePage.trim()
      : request.headers.get("referer") ?? "";

  try {
    const { response, payload } = await saveSubscription(
      strapiUrl,
      strapiToken,
      validated,
      sourcePage,
    );

    if (!response.ok) {
      const message = extractStrapiError(
        payload,
        response.status === 404 || response.status === 405
          ? "Subscription service is not configured yet. Please redeploy Strapi with the newsletter subscription content type."
          : "Unable to save subscription.",
      );

      return Response.json({ error: message }, { status: response.status });
    }

    return Response.json({
      data: payload?.data ?? { email: validated.email },
    });
  } catch {
    return Response.json(
      { error: "Unable to reach subscription service." },
      { status: 502 },
    );
  }
}
