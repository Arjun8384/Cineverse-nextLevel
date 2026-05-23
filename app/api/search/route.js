import {
  searchMovies,
} from "@/features/movies/services/tmdb";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const query =
      searchParams.get("query");

    const page =
      searchParams.get("page") || 1;

    if (!query) {
      return Response.json([]);
    }

    const movies =
      await searchMovies(
        query,
        page
      );

    return Response.json(movies);
  } catch (error) {
    console.error(
      "API Search Route Error:",
      error
    );

    return Response.json([]);
  }
}