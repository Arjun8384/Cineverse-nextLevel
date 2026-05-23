import HeroBanner from "@/features/movies/components/HeroBanner";

import MovieSection from "@/features/movies/components/MovieSection";

import SearchMoviesContainer from "@/features/movies/components/SearchMoviesContainer";

import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/features/movies/services/tmdb";

export const metadata = {
  title:
    "Cineverse | Discover Movies",

  description:
    "Explore trending movies, favorites, and cinematic experiences with Cineverse.",
};

export default async function HomePage() {
  const [
    trendingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  ] = await Promise.all([
    getTrendingMovies(),
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  const featuredMovie =
    trendingMovies?.[0];

  return (
    <main>
      <HeroBanner
        movie={featuredMovie}
      />

      <SearchMoviesContainer
        initialMovies={
          trendingMovies
        }
      />

      <MovieSection
        title="Popular Movies"
        movies={popularMovies}
      />

      <MovieSection
        title="Top Rated Movies"
        movies={topRatedMovies}
      />

      <MovieSection
        title="Upcoming Movies"
        movies={upcomingMovies}
      />
    </main>
  );
}