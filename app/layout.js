import "./globals.css";
import { FavoritesProvider } from "@/features/favorites/context/FavoritesContext";
import Navbar from "@/shared/components/Navbar";

export const metadata = {
  metadataBase: new URL(
    "https://cineverse.vercel.app"
  ),

  title: {
    default: "Cineverse",

    template:
      "%s | Cineverse",
  },

  description:
    "Discover trending movies, explore cast details, reviews, trailers, and cinematic recommendations with Cineverse.",

  keywords: [
    "movies",
    "tmdb",
    "cineverse",
    "movie app",
    "streaming",
    "nextjs",
    "react",
    "cinema",
  ],

  authors: [
    {
      name: "Aaru",
    },
  ],

  creator: "Aaru",

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://cineverse.vercel.app",

    siteName: "Cineverse",

    title: "Cineverse",

    description:
      "Discover trending movies, cast details, reviews, and trailers.",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Cineverse",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title: "Cineverse",

    description:
      "Discover trending movies, cast details, reviews, and trailers.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-video-preview":
        -1,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,
    },
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}