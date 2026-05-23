import {
  getGenres,
} from "@/features/movies/services/tmdb";

export async function GET() {
  try {
    const genres =
      await getGenres();

    return Response.json(genres);
  } catch (error) {
    console.error(
      "Genres Route Error:",
      error
    );

    return Response.json([]);
  }
}