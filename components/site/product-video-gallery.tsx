import { InlineVideo } from "./inline-video";
import type { ProductVideo } from "./site-data";

// variant controla apenas o arranjo dos cards; a proporção de cada vídeo continua
// vindo de `item.aspectRatio`, nunca de uma altura fixa imposta aqui.
//  - "grid"  galeria responsiva (até 3 colunas), respeita vídeos verticais
//  - "duo"   dois cards largos lado a lado (Embio 6000)
//  - "stack" um card amplo em coluna única (Embio 3100)
type Variant = "grid" | "duo" | "stack";

export function ProductVideoGallery({ items, variant = "grid" }: { items: ProductVideo[]; variant?: Variant }) {
  const hasPortrait = items.some((item) => item.aspectRatio && (() => { const [w, h] = item.aspectRatio!.split("/").map((p) => Number(p.trim())); return h > w; })());
  return (
    <div className={`product-video-grid pvg-${variant} ${hasPortrait ? "has-portrait" : ""}`.trim()} data-count={items.length}>
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
