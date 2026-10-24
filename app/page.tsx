import type { Metadata } from "next";
import { SiteClient } from "./site-client";
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return <SiteClient />;
}
