export type Method = "GET" | "PUT" | "POST" | "DELETE" | "PATCH";

export type Body = BodyInit | null | undefined;

export type Options = {
  bypass?: boolean;
  dontStringify?: boolean;
};

export type CallApi = {
  url: string;
  method?: Method;
  hasBody?: boolean;
  body?: Body;
  options?: Options;
};
