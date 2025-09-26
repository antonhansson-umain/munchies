"use server";

import { makeAPIRequest } from "@/lib/makeAPIRequest";
import { OpenStatusResponse } from "@/types/OpenStatusResponse";
import { Restaurant } from "@/types/Restaurant";

export async function getOpenStatus(id: Restaurant["id"]) {
  const res = await makeAPIRequest<OpenStatusResponse>(`/open/${id}`, 60);
  if (!res || "error" in res) {
    console.error(
      "Fetching open status failed for:",
      id,
      "Because:",
      res?.reason ?? "Unkown reason"
    );
    return undefined;
  }
  return res;
}
