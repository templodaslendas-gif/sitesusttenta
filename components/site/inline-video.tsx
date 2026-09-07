"use client";

import Image from "next/image";
import { Clock3, Play } from "lucide-react";
import { useState, type CSSProperties } from "react";
import type { ProductVideo } from "./site-data";

// Proporção coerente: vem de `item.aspectRatio` (medida real do arquivo em site-data.ts).
// Sem valor definido, o CSS aplica a proporção padrão da classe (`.inline-video`).
function resolveRatio(item: ProductVideo) {
  if (!item.aspectRatio) return { style: undefined as CSSProperties | undefined, orientation: "landscape" };
  const [w, h] = item.aspectRatio.split("/").map((part) => Number(part.trim()));
  const orientation = Number.isFinite(w) && Number.isFinite(h) && h > w ? "portrait" : Number.isFinite(w) && Number.isFinite(h) && w === h ? "square" : "landscape";
  return { style: { aspectRatio: item.aspectRatio } as CSSProperties, orientation };
}

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
  const { style, orientation } = resolveRatio(item);
  const dataOrientation = item.aspectRatio ? orientation : undefined;
  const sizes = orientation === "portrait" ? "(max-width: 900px) 88vw, 340px" : "(max-width: 800px) 92vw, 46vw";

  if (item.status === "coming-soon" || !item.videoSrc) {
    return (
      <div className={`inline-video is-coming-soon ${className}`.trim()} data-orientation={dataOrientation} style={style}>
        <Image src={item.posterSrc} alt="" fill sizes={sizes} />
        <span className="video-poster-shade" aria-hidden="true" />
        <span className="inline-video-soon"><Clock3 aria-hidden="true" />Vídeo em breve</span>
      </div>
    );
  }

  return (
    <div className={`inline-video ${playing ? "is-playing" : ""} ${className}`.trim()} data-orientation={dataOrientation} style={style}>
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
          <Image src={item.posterSrc} alt="" fill sizes={sizes} priority={priority} />
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
