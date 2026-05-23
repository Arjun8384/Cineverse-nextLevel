"use client";

import {
  useState,
} from "react";

export default function TrailerButton({
  movieId,
}) {
  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleTrailer =
    async () => {
      try {
        setLoading(true);

        const response =
          await fetch(
            `/api/movie/${movieId}/videos`
          );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch trailer"
          );
        }

        const data =
          await response.json();

        const trailer =
          data.results?.find(
            (video) =>
              video.site ===
                "YouTube" &&
              video.type ===
                "Trailer"
          );

        if (!trailer) {
          alert(
            "Trailer not available"
          );

          return;
        }

        window.open(
          `https://www.youtube.com/watch?v=${trailer.key}`,
          "_blank"
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <button
      onClick={
        handleTrailer
      }
      disabled={loading}
      className="mt-6 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-xl font-semibold"
    >
      {loading
        ? "Loading..."
        : "▶ Watch Trailer"}
    </button>
  );
}