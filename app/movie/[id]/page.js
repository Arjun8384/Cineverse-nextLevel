import Image from "next/image";

import {
  notFound,
} from "next/navigation";

import CastSection from "@/features/movies/components/CastSection";

import ReviewsSection from "@/features/movies/components/ReviewsSection";

import SimilarMoviesSection from "@/features/movies/components/SimilarMoviesSection";

import TrailerButton from "@/features/movies/components/TrailerButton";

import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getSimilarMovies,
} from "@/features/movies/services/tmdb";

export async function generateMetadata({
  params,
}) {
  const { id } =
    await params;

  const movie =
    await getMovieDetails(id);

  if (!movie) {
    return {
      title:
        "Movie Not Found",
    };
  }

  return {
  title: movie.title,

  description:
    movie.overview,

  openGraph: {
    title: movie.title,

    description:
      movie.overview,

    images: [
      `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title: movie.title,

    description:
      movie.overview,

    images: [
      `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    ],
  },
}; }

export default async function MoviePage({
  params,
}) {
  const { id } =
    await params;

  const movie =
    await getMovieDetails(id);

  if (!movie) {
    notFound();
  }

  const [
    cast,
    similarMovies,
    reviews,
  ] = await Promise.all([
    getMovieCredits(id),
    getSimilarMovies(id),
    getMovieReviews(id),
  ]);

  const backdropUrl =
    movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "https://via.placeholder.com/1920x1080";

  const posterUrl =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={backdropUrl}
            alt={movie.title}
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-[300px_1fr] gap-10 items-end">
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-zinc-300 mb-6">
              <span>
                ⭐{" "}
                {movie.vote_average?.toFixed(
                  1
                )}
              </span>

              <span>
                {movie.release_date}
              </span>

              <span>
                {
                  movie.runtime
                }{" "}
                mins
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {movie.genres?.map(
                (genre) => (
                  <span
                    key={
                      genre.id
                    }
                    className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                )
              )}
            </div>

            <p className="text-lg leading-relaxed text-zinc-200 max-w-3xl mb-10">
              {movie.overview}
            </p>

            <TrailerButton
              movieId={movie.id}
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <CastSection cast={cast} />

        <SimilarMoviesSection
          movies={similarMovies}
        />

        <ReviewsSection
          reviews={reviews}
        />
      </section>
    </main>
  );
}