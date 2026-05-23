import Image from "next/image";

import Link from "next/link";

import FavoriteButton from "@/features/favorites/components/FavoriteButton";

const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p/w500";

export default function MovieCard({
  movie,
}) {
  const posterUrl =
    movie?.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : "/no-image.png";

  return (
    <Link href={`/movie/${movie.id}`}>
      <article className="relative bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer h-full">
        <FavoriteButton movie={movie} />

        <div className="relative w-full h-[320px]">
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="font-bold text-lg line-clamp-1">
            {movie.title}
          </h2>

          <div className="flex items-center justify-between mt-3 text-sm text-zinc-400">
            <span>
              ⭐
              {" "}
              {movie.vote_average?.toFixed(
                1
              )}
            </span>

            <span>
              {movie.release_date?.split(
                "-"
              )[0]}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}