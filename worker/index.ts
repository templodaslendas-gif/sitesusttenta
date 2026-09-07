/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      // On Cloudflare the ASSETS binding serves static files; the local Vite
      // dev worker has none, so fall back to a same-origin fetch that hits
      // Vite's static file server.
      const fetchAsset = (path: string) => {
        const assetRequest = new Request(new URL(path, request.url));
        return env.ASSETS ? env.ASSETS.fetch(assetRequest) : fetch(assetRequest);
      };

      // The Images binding only exists on Cloudflare. Without it (local dev)
      // skip transformation and let the handler serve the original file.
      if (!env.IMAGES) {
        return handleImageOptimization(request, { fetchAsset });
      }

      return handleImageOptimization(request, {
        fetchAsset,
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      });
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
