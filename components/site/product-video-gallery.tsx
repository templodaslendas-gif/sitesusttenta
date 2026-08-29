import Image from "next/image";
import { Clock3, Play } from "lucide-react";
import type { ProductVideo } from "./site-data";

export function ProductVideoGallery({ items, onOpen, compact = false }: { items: ProductVideo[]; onOpen?: (item: ProductVideo) => void; compact?: boolean }) {
  return <div className={`product-video-grid ${compact ? "is-compact" : ""}`}>{items.map((item) => item.status === "coming-soon" ? <article key={item.id} className="video-coming-soon" data-reveal><div className="video-poster"><Image src={item.posterSrc} alt="" fill sizes="(max-width: 800px) 92vw, 30vw" /><span><Clock3 />Vídeo em breve</span></div><div><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.description}</p></div></article> : <article key={item.id} className="video-available" data-reveal><button type="button" data-video-trigger={item.id} onClick={() => onOpen?.(item)} aria-label={`Reproduzir ${item.title}`}><Image src={item.posterSrc} alt="" fill sizes="(max-width: 800px) 92vw, 30vw" /><span className="play-button"><Play fill="currentColor" /></span></button><div><small>{item.eyebrow}</small><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>;
}
