"use client";

import { useState } from "react";
import Image from "next/image";

type VideoEmbedProps = {
  videoId: string;
  title: string;
  /** Optional custom poster image (e.g. "/thumbnails/kinetiq.jpg"). Falls back to YouTube's own thumbnail. */
  poster?: string;
};

export default function VideoEmbed({ videoId, title, poster }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(
    poster ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${title} videosunu oynat`}
      className="group absolute top-0 left-0 h-full w-full cursor-pointer"
    >
      <Image
        src={posterSrc}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        onError={() => {
          // maxresdefault.jpg doesn't exist for every upload; hqdefault.jpg always does.
          if (!posterSrc.includes("hqdefault")) {
            setPosterSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
          }
        }}
      />
      <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white md:h-16 md:w-16">
          <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 fill-white md:h-6 md:w-6">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
