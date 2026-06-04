import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

export const fetch = createStartHandler((event) => {
  const response = defaultStreamHandler(event);

  if (!response) {
    return new Response("Not Found", { status: 404 });
  }

  return response;
});
