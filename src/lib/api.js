const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(path) {
  const res = await fetch(`${API_URL}/api/${path}`, {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}
