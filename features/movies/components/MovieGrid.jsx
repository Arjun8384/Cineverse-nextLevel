import MovieCard from "./MovieCard";

export default function MovieGrid({
  movies,
}) {
  if (!movies?.length) {
    return (
      <div className="text-center py-20 text-zinc-400">
        No movies found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}