export default function MovieCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-800 rounded-2xl overflow-hidden">
        <div className="aspect-[2/3] bg-zinc-700" />

        <div className="p-4">
          <div className="h-5 bg-zinc-700 rounded mb-3 w-3/4" />

          <div className="h-4 bg-zinc-700 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}