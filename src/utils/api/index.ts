import { CallApi } from "../../types";
import { getToken } from "../get-token";

export const callApi = async <T>({
  method = "GET",
  hasBody = false,
  url,
  body,
  options,
}: CallApi): Promise<undefined | T> => {
  const { token } = getToken();

  console.log("token:", token);

  const response = await fetch(url, {
    method,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(hasBody && { "Content-Type": "application/json" }),
    },
    ...(hasBody && {
      body: options?.dontStringify ? body : JSON.stringify(body),
    }),
  });

  try {
    return (await response.json()) as T;
  } catch (err) {
    console.error("API", err);

    return undefined;
  }
};
