import MovieGridSkeleton from "@/features/movies/components/MovieGridSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="h-[85vh] bg-zinc-900 animate-pulse" />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="h-10 w-64 bg-zinc-800 rounded mb-10 animate-pulse" />

        <MovieGridSkeleton />
      </section>
    </main>
  );
}