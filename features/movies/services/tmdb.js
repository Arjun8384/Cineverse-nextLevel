const API_KEY =
  process.env.TMDB_API_KEY;

const BASE_URL =
  process.env.TMDB_BASE_URL;

export async function getTrendingMovies(
  page = 1
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch trending movies"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "TMDB Fetch Error:",
      error
    );

    return [];
  }
}

export async function getMovieDetails(
  movieId
) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch movie details"
      );
    }

    const data =
      await response.json();

    return data;
  } catch (error) {
    console.error(
      "Movie Details Error:",
      error
    );

    return null;
  }
}

export async function searchMovies(
  query,
  page = 1
) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to search movies"
      );
    }

    const data =
      await response.json();

    return data.results;
  } catch (error) {
    console.error(
      "Search Error:",
      error
    );

    return [];
  }
}

export async function getGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch genres"
      );
    }

    const data =
      await response.json();

    return data.genres;
  } catch (error) {
    console.error(
      "Genres Error:",
      error
    );

    return [];
  }
}

export async function getMoviesByGenre(
  genreId,
  page = 1
) {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch genre movies"
      );
    }

    const data =
      await response.json();

    return data.results;
  } catch (error) {
    console.error(
      "Genre Movies Error:",
      error
    );

    return [];
  }
}

export async function getPopularMovies() {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch popular movies"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Popular Movies Error:",
      error
    );

    return [];
  }
}

export async function getTopRatedMovies() {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch top rated movies"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Top Rated Movies Error:",
      error
    );

    return [];
  }
}

export async function getUpcomingMovies() {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch upcoming movies"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Upcoming Movies Error:",
      error
    );

    return [];
  }
}

export async function getMovieVideos(
  movieId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch movie videos"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Movie Videos Error:",
      error
    );

    return [];
  }
}

export async function getMovieCredits(
  movieId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch movie credits"
      );
    }

    const data =
      await response.json();

    return data.cast || [];
  } catch (error) {
    console.error(
      "Movie Credits Error:",
      error
    );

    return [];
  }
}

export async function getSimilarMovies(
  movieId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch similar movies"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Similar Movies Error:",
      error
    );

    return [];
  }
}

export async function getMovieReviews(
  movieId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch reviews"
      );
    }

    const data =
      await response.json();

    return data.results || [];
  } catch (error) {
    console.error(
      "Movie Reviews Error:",
      error
    );

    return [];
  }
}

export async function getPersonDetails(
  personId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/person/${personId}?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch person details"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Person Details Error:",
      error
    );

    return null;
  }
}

export async function getPersonMovies(
  personId
) {
  try {
    const response =
      await fetch(
        `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch person movies"
      );
    }

    const data =
      await response.json();

    return data.cast || [];
  } catch (error) {
    console.error(
      "Person Movies Error:",
      error
    );

    return [];
  }
}