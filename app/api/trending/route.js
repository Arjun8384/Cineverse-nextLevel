import {
  getTrendingMovies,
} from "@/features/movies/services/tmdb";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const page =
      searchParams.get("page") || 1;

    const movies =
      await getTrendingMovies(
        page
      );

    return Response.json(movies);
  } catch (error) {
    console.error(
      "Trending Route Error:",
      error
    );

    return Response.json([]);
  }
}