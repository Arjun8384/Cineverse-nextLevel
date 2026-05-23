"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

export default function Navbar() {
  const pathname =
    usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Favorites",
      href: "/favorites",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-black text-white tracking-wide">
            Cineverse
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map(
            (link) => {
              const isActive =
                pathname ===
                link.href;

              return (
                <Link
                  key={
                    link.href
                  }
                  href={
                    link.href
                  }
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {
                    link.label
                  }
                </Link>
              );
            }
          )}
        </div>
      </nav>
    </header>
  );
}