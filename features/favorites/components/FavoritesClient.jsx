"use client";

import dynamic from "next/dynamic";

const FavoritesGrid = dynamic(
  () =>
    import("./FavoritesGrid"),
  {
    ssr: false,
  }
);

export default function FavoritesClient() {
  return <FavoritesGrid />;
}