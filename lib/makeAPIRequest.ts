"use server";

import { BASE_API_URL } from "@/constants/API_URL";

export async function makeAPIRequest<T>(endpoint: string) {
  const response = await fetch(`${BASE_API_URL}${endpoint}`);
  if (!response || !response.ok) {
    return null;
  }
  const json: T = await response.json();
  return json;
}
