/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext =
  createContext();

export function FavoritesProvider({
  children,
}) {
  const [
    favorites,
    setFavorites,
  ] = useState([]);

  const [
    hydrated,
    setHydrated,
  ] = useState(false);

  useEffect(() => {
    const storedFavorites =
      localStorage.getItem(
        "cineverse-favorites"
      );

    if (storedFavorites) {
      try {
        setFavorites(
          JSON.parse(
            storedFavorites
          )
        );
      } catch (error) {
        console.error(
          error
        );
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "cineverse-favorites",
      JSON.stringify(
        favorites
      )
    );
  }, [favorites, hydrated]);

  const isFavorite = (
    movieId
  ) => {
    return favorites.some(
      (movie) =>
        movie.id === movieId
    );
  };

  const toggleFavorite = (
    movie
  ) => {
    setFavorites((prev) => {
      const exists =
        prev.some(
          (item) =>
            item.id ===
            movie.id
        );

      if (exists) {
        return prev.filter(
          (item) =>
            item.id !==
            movie.id
        );
      }

      return [
        ...prev,
        movie,
      ];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        hydrated,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(
    FavoritesContext
  );
}