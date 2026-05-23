import CastCard from "./CastCard";

export default function CastSection({
  cast,
}) {
  if (!cast?.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        Top Cast
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {cast
          .slice(0, 15)
          .map((actor) => (
            <CastCard
              key={actor.id}
              actor={actor}
            />
          ))}
      </div>
    </section>
  );
}