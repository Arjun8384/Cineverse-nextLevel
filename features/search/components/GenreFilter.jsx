"use client";

import { useEffect, useState } from "react";

export default function GenreFilter({
  selectedGenre,
  onChange,
}) {
  const [genres, setGenres] =
    useState([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response =
          await fetch(
            "/api/genres"
          );

        const data =
          await response.json();

        setGenres(
          data.genres || []
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchGenres();
  }, []);

  return (
    <select
      value={selectedGenre}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
    >
      <option value="">
        All Genres
      </option>

      {genres.map((genre) => (
        <option
          key={genre.id}
          value={genre.id}
        >
          {genre.name}
        </option>
      ))}
    </select>
  );
}