"use client";

import Image from "next/image";
import { Clock3, Play } from "lucide-react";
import { useState } from "react";
import type { ProductVideo } from "./site-data";

export function InlineVideo({
  item,
  className = "",
  playLabel = "Assistir ao vídeo",
  priority = false,
}: {
  item: ProductVideo;
  className?: string;
  playLabel?: string;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  if (item.status === "coming-soon" || !item.videoSrc) {
    return (
      <div className={`inline-video is-coming-soon ${className}`.trim()}>
        <Image src={item.posterSrc} alt="" fill sizes="(max-width: 800px) 92vw, 30vw" />
        <span className="video-poster-shade" aria-hidden="true" />
        <span className="inline-video-soon"><Clock3 aria-hidden="true" />Vídeo em breve</span>
      </div>
    );
  }

  return (
    <div className={`inline-video ${playing ? "is-playing" : ""} ${className}`.trim()}>
      {playing ? (
        <video
          className="inline-video-player"
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={item.posterSrc}
          aria-label={item.title}
        >
          <source src={item.videoSrc} type="video/mp4" />
          Seu navegador não oferece suporte a vídeo HTML5.
        </video>
      ) : (
        <button
          type="button"
          className="inline-video-trigger video-frame"
          data-video-trigger={item.id}
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}: ${item.title}`}
        >
          <Image src={item.posterSrc} alt="" fill sizes="(max-width: 800px) 92vw, 30vw" priority={priority} />
          <span className="video-poster-shade" aria-hidden="true" />
          <span className="video-cta" aria-hidden="true">
            <span className="video-cta-ring"><Play fill="currentColor" /></span>
            <span className="video-cta-label">{playLabel}</span>
          </span>
        </button>
      )}
    </div>
  );
}
