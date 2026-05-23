import Image from "next/image";
import TrailerButton from "./TrailerButton";
import Link from "next/link";

const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p/original";

export default function HeroBanner({
  movie,
}) {
  if (!movie) {
    return null;
  }

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Image
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-zinc-300 mb-4">
              Featured Movie
            </p>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {movie.title}
            </h1>

            <div className="flex gap-5 text-zinc-300 mb-6">
              <span>
                ⭐{" "}
                {movie.vote_average?.toFixed(
                  1
                )}
              </span>

              <span>
                📅{" "}
                {movie.release_date?.split(
                  "-"
                )[0]}
              </span>
            </div>

            <p className="text-zinc-300 text-lg leading-8 mb-8">
              {movie.overview}
            </p>

            <div className="flex gap-4">
              <Link
                href={`/movie/${movie.id}`}
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-300 transition"
              >
                View Details
              </Link>

              <TrailerButton
              movieId={movie.id}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}