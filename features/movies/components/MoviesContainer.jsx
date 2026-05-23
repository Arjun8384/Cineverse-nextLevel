import MovieGrid from "./MovieGrid";

export default function MoviesContainer({
  movies,
}) {
  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Trending Movies 🎬
      </h1>

      <MovieGrid movies={movies} />
    </section>
  );
}