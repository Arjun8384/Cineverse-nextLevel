"use client";

export default function TrailerModal({
  videoKey,
  onClose,
}) {
  if (!videoKey) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6">
      <div className="relative w-full max-w-5xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 text-white text-2xl"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}