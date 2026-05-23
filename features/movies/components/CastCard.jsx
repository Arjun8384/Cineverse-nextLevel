import Image from "next/image";

import Link from "next/link";

export default function CastCard({
  actor,
}) {
  const imageUrl =
    actor.profile_path
      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
      : "/no-image.png";

  return (
    <Link
      href={`/person/${actor.id}`}
    >
      <article className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-zinc-800">
        <div className="relative h-[300px] w-full">
          <Image
            src={imageUrl}
            alt={actor.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg">
            {actor.name}
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            {actor.character}
          </p>
        </div>
      </article>
    </Link>
  );
}