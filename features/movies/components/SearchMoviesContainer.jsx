"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import SearchBar from "../../search/components//SearchBar";

import GenreFilter from "../../search/components/GenreFilter";

import MovieGrid from "./MovieGrid";

import MovieGridSkeleton from "./MovieGridSkeleton";

export default function SearchMoviesContainer({
  initialMovies,
}) {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const observerRef =
    useRef(null);

  const initialQuery =
    searchParams.get("q") || "";

  const [movies, setMovies] =
    useState(initialMovies);

  const [searchTerm, setSearchTerm] =
    useState(initialQuery);

  const [loading, setLoading] =
    useState(false);

  const [selectedGenre, setSelectedGenre] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [hasMore, setHasMore] =
    useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);

        let endpoint =
          `/api/movies?page=${page}`;

        if (searchTerm) {
          endpoint =
            `/api/search?query=${searchTerm}&page=${page}`;
        }

        if (selectedGenre) {
          endpoint =
            `/api/genre?id=${selectedGenre}&page=${page}`;
        }

        const response =
          await fetch(endpoint);

        const data =
          await response.json();

        const fetchedMovies =
          data.results || [];

        if (
          fetchedMovies.length === 0
        ) {
          setHasMore(false);

          return;
        }

        if (page === 1) {
          setMovies(
            fetchedMovies
          );
        } else {
          setMovies((prev) => {
            const combined = [
              ...prev,
              ...fetchedMovies,
            ];

            return combined.filter(
              (
                movie,
                index,
                self
              ) =>
                index ===
                self.findIndex(
                  (m) =>
                    m.id ===
                    movie.id
                )
            );
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [
    searchTerm,
    selectedGenre,
    page,
  ]);

  useEffect(() => {
    const params =
      new URLSearchParams();

    if (searchTerm) {
      params.set(
        "q",
        searchTerm
      );
    }

    router.push(
      `/?${params.toString()}`,
      {
        scroll: false,
      }
    );
  }, [searchTerm, router]);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const first =
            entries[0];

          if (
            first.isIntersecting &&
            hasMore &&
            !loading
          ) {
            setPage(
              (prev) =>
                prev + 1
            );
          }
        },
        {
          threshold: 1,
        }
      );

    const currentObserver =
      observerRef.current;

    if (currentObserver) {
      observer.observe(
        currentObserver
      );
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(
          currentObserver
        );
      }
    };
  }, [loading, hasMore]);

  function handleSearch(
    value
  ) {
    setPage(1);

    setHasMore(true);

    setSearchTerm(value);
  }

  function handleGenreChange(
    genreId
  ) {
    setPage(1);

    setHasMore(true);

    setSelectedGenre(
      genreId
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-black mb-10">
        Discover Movies
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <SearchBar
          value={searchTerm}
          onChange={
            handleSearch
          }
        />

        <GenreFilter
          selectedGenre={
            selectedGenre
          }
          onChange={
            handleGenreChange
          }
        />
      </div>

      {loading && page === 1 ? (
        <MovieGridSkeleton />
      ) : (
        <>
          <MovieGrid
            movies={movies}
          />

          {loading && (
            <div className="mt-10">
              <MovieGridSkeleton />
            </div>
          )}

          <div
            ref={observerRef}
            className="h-10"
          />
        </>
      )}
    </section>
  );
}