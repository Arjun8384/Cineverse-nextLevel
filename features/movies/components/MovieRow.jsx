import MovieCard from "./MovieCard";

export default function MovieRow({
  movies,
}) {
  if (!movies?.length) {
    return null;
  }

  return (
    <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="min-w-[220px] max-w-[220px] flex-shrink-0"
        >
          <MovieCard
            movie={movie}
          />
        </div>
      ))}
    </div>
  );
}