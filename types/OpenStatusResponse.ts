import { OpenStatus } from "./OpenStatus";

export type OpenStatusResponse =
  | OpenStatus
  | {
      error: boolean;
      reason: string;
    };
