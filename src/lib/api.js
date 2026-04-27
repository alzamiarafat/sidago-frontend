import { cache } from "react";

function appendQueryValue(params, key, value) {
  if (value === undefined || value === null || value === "") {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      appendQueryValue(params, `${key}[${index}]`, item);
    });
    return;
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([childKey, childValue]) => {
      appendQueryValue(params, `${key}[${childKey}]`, childValue);
    });
    return;
  }

  params.append(key, String(value));
}

export function buildApiPath(path, query = {}) {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    appendQueryValue(params, key, value);
  });

  const queryString = params.toString();
  return queryString ? `${path}?${queryString}` : path;
}

export async function fetchAPI(path, options = {}) {
  const { revalidate = 60, silent404 = false } = options;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}`,
      {
        next: { revalidate },
      },
    );

    if (!res.ok) {
      if (!(silent404 && res.status === 404)) {
        console.error("API Error:", res.status);
      }
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}

// Cached version to ensure API is called only once per request
export const getGlobalSettings = cache(async () => {
  const data = await fetchAPI("site-config?populate=*");

  if (!data?.data) {
    return null;
  }

  const siteConfig = data.data.attributes ?? data.data;

  return {
    ...siteConfig,
    version: {
      label: siteConfig?.versionLabel ?? "v2",
    },
  };
});
