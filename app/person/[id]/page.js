import Image from "next/image";

import {
  notFound,
} from "next/navigation";

import KnownForSection from "@/features/movies/components/KnownForSection";

import {
  getPersonDetails,
  getPersonMovies,
} from "@/features/movies/services/tmdb";

export async function generateMetadata({
  params,
}) {
  const { id } =
    await params;

  const person =
    await getPersonDetails(id);

  if (!person) {
    return {
      title:
        "Person Not Found",
    };
  }

  return {
  title: person.name,

  description:
    person.biography?.slice(
      0,
      160
    ) ||
    `Explore movies and biography of ${person.name}`,

  openGraph: {
    title: person.name,

    description:
      person.biography?.slice(
        0,
        160
      ),

    images: [
      `https://image.tmdb.org/t/p/original${person.profile_path}`,
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title: person.name,

    description:
      person.biography?.slice(
        0,
        160
      ),

    images: [
      `https://image.tmdb.org/t/p/original${person.profile_path}`,
    ],
  },
};
}

export default async function PersonPage({
  params,
}) {
  const { id } =
    await params;

  const person =
    await getPersonDetails(id);

  if (!person) {
    notFound();
  }

  const movies =
    await getPersonMovies(id);

  const sortedMovies =
    movies
      .sort(
        (a, b) =>
          b.popularity -
          a.popularity
      )
      .slice(0, 20);

  const profileUrl =
    person.profile_path
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : "https://via.placeholder.com/500x750";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[350px_1fr] gap-12">
        <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={profileUrl}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            {person.name}
          </h1>

          <div className="flex flex-wrap gap-4 text-zinc-400 mb-8">
            {person.birthday && (
              <span>
                Born:{" "}
                {
                  person.birthday
                }
              </span>
            )}

            {person.place_of_birth && (
              <span>
                {
                  person.place_of_birth
                }
              </span>
            )}

            {person.known_for_department && (
              <span>
                {
                  person.known_for_department
                }
              </span>
            )}
          </div>

          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">
              Biography
            </h2>

            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
              {person.biography ||
                "No biography available."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <KnownForSection
          movies={sortedMovies}
        />
      </section>
    </main>
  );
}