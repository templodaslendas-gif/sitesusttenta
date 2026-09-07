import { InlineVideo } from "./inline-video";
import type { ProductVideo } from "./site-data";

export function ProductVideoGallery({ items, compact = false }: { items: ProductVideo[]; compact?: boolean }) {
  return (
    <div className={`product-video-grid ${compact ? "is-compact" : ""}`.trim()}>
      {items.map((item) => (
        <article key={item.id} className="video-card" data-reveal>
          <InlineVideo item={item} />
          <div className="video-card-copy">
            <small>{item.eyebrow}</small>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
