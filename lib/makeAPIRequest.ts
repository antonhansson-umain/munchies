"use server";

import { BASE_API_URL } from "@/constants/API_URL";

export async function makeAPIRequest<T>(endpoint: string, revalidate?: number) {
  const response = await fetch(`${BASE_API_URL}${endpoint}`, {
    ...(revalidate ? { next: { revalidate } } : {}), // only include if provided
  });
  if (!response || !response.ok) {
    console.error(response.status);
    return null;
  }
  const json: T = await response.json();
  return json;
}
