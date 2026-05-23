import MovieRow from "./MovieRow";

export default function SimilarMoviesSection({
  movies,
}) {
  if (!movies?.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          More Like This
        </h2>
      </div>

      <MovieRow movies={movies} />
    </section>
  );
}