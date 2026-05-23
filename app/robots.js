export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",
      },
    ],

    sitemap:
      "https://cineverse.vercel.app/sitemap.xml",
  };
}