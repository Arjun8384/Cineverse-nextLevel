import MovieRow from "./MovieRow";

export default function MovieSection({
  title,
  movies,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>
      </div>

      <MovieRow movies={movies} />
    </section>
  );
}