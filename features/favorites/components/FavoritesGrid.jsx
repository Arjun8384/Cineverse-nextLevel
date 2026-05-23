"use client";

import MovieGrid from "@/features/movies/components/MovieGrid";

import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesGrid() {
  const {
    favorites,
    hydrated,
  } = useFavorites();

  if (!hydrated) {
    return (
      <div className="text-center py-20 text-zinc-400">
        Loading favorites...
      </div>
    );
  }

  if (!favorites.length) {
    return (
      <div className="text-center py-20 text-zinc-400">
        No favorite movies added yet.
      </div>
    );
  }

  return (
    <MovieGrid
      movies={favorites}
    />
  );
}