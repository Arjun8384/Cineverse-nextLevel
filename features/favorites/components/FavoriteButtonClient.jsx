"use client";

import useFavorites from "../hooks/useFavorites";

export default function FavoriteButtonClient({
  movie,
}) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite =
    isFavorite(movie.id);

  function handleClick(e) {
    e.preventDefault();

    toggleFavorite(movie);
  }

  return (
    <button
      onClick={handleClick}
      className="absolute top-3 right-3 z-10 bg-black/70 px-3 py-2 rounded-full text-xl hover:scale-110 transition"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}