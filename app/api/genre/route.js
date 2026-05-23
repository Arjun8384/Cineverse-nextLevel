import {
  getMoviesByGenre,
} from "@/features/movies/services/tmdb";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const genreId =
      searchParams.get("id");

    const page =
      searchParams.get("page") || 1;

    const movies =
      await getMoviesByGenre(
        genreId,
        page
      );

    return Response.json(movies);
  } catch (error) {
    console.error(
      "Genre Movies Route Error:",
      error
    );

    return Response.json([]);
  }
}