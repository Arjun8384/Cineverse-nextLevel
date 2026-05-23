"use client";

export default function SearchBar({
  query,
  setQuery,
}) {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-white transition"
        />

        <button
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Search
        </button>
      </div>
    </div>
  );
}