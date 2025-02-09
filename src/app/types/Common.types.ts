import { HttpStatusCode } from "axios";

export interface BaseApiResponse {
    message: string;
    status: StatusCodes;
    success?: boolean;
    type?: string;
    token?: string;
  }
  export type StatusCodes = `${Extract<
    
    HttpStatusCode,
    number
  >}` extends `${infer N extends number}`
    ? N
    : never;