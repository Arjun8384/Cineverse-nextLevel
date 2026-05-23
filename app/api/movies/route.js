import { NextResponse } from "next/server";

import {
  getTrendingMovies,
} from "@/features/movies/services/tmdb";

export async function GET(
  request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const page =
      searchParams.get("page") ||
      1;

    const movies =
      await getTrendingMovies(
        page
      );

    return NextResponse.json({
      results: movies,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch movies",
      },
      {
        status: 500,
      }
    );
  }
}