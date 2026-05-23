import { NextResponse } from "next/server";

export async function GET(
  request,
  { params }
) {
  try {
    const { id } =
      await params;

    const response =
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}`
      );

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            "Failed to fetch videos",
        },
        {
          status:
            response.status,
        }
      );
    }

    const data =
      await response.json();

    return NextResponse.json(
      data
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Server error",
      },
      {
        status: 500,
      }
    );
  }
}