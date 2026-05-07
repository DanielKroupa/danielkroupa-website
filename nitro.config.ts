import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  preset: "vercel",
  compatibilityDate: "2026-03-27",
  serveStatic: true,
  routeRules: {
    "/faq": {
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
    "/terms": {
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  },
});
