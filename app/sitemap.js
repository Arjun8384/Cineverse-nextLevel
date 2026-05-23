export default async function sitemap() {
  return [
    {
      url: "https://cineverse.vercel.app",

      lastModified:
        new Date(),

      priority: 1,
    },

    {
      url:
        "https://cineverse.vercel.app/favorites",

      lastModified:
        new Date(),

      priority: 0.8,
    },
  ];
}