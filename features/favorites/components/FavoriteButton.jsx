"use client";

import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({
  movie,
}) {
  const {
    hydrated,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  if (!hydrated) {
    return null;
  }

  const favorite =
    isFavorite(movie.id);

  const handleClick = (
    e
  ) => {
    e.preventDefault();

    e.stopPropagation();

    toggleFavorite(movie);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-3 right-3 z-10 bg-black/70 px-3 py-2 rounded-full text-xl hover:scale-110 transition-transform"
    >
      {favorite
        ? "❤️"
        : "🤍"}
    </button>
  );
}