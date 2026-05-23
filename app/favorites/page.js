import FavoritesClient from "@/features/favorites/components/FavoritesClient";

export const metadata = {
  title:
    "Favorites | Cineverse",

  description:
    "Your favorite movies collection.",
};

export default function FavoritesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">
        Your Favorites ❤️
      </h1>

      <FavoritesClient />
    </main>
  );
}