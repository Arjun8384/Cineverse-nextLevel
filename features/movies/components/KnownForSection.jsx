import MovieRow from "./MovieRow";

export default function KnownForSection({
  movies,
}) {
  if (!movies?.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8">
        Known For
      </h2>

      <MovieRow
        movies={movies}
      />
    </section>
  );
}