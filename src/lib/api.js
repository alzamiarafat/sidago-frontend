import { cache } from "react";
export async function fetchAPI(path) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      console.error("API Error:", res.status);
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
  const data = await fetchAPI("global?populate=*");
  return data?.data || null;
});
