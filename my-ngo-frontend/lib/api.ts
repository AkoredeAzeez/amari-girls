/* ──────────────────────────────────────────────────────────────────────────
   API helpers — fetches site content from the backend and falls back
   gracefully to hardcoded defaults when the backend is unreachable or
   a section is missing from the response.

   Set  NEXT_PUBLIC_API_URL  in your .env  (or .env.local) to point at
   the backend, e.g.  NEXT_PUBLIC_API_URL=https://api.amarigirlsfoundation.org
   ────────────────────────────────────────────────────────────────────────── */

import type { SiteContent } from "./types";
import defaults from "./defaults";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

/* ── Image URL resolver ──────────────────────────────────────────────────
   • Full URLs  → returned as-is
   • Paths starting with /  → local public folder, returned as-is
   • Relative paths  → prepended with the API base
   • Empty / falsy  → empty string
   ────────────────────────────────────────────────────────────────────── */
export function resolveImageUrl(path: string | undefined | null): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/")) return path;
  return API_BASE ? `${API_BASE}/${path}` : `/${path}`;
}

/* ── Section-level keys for safe merge ───────────────────────────────── */
const SECTION_KEYS: (keyof SiteContent)[] = [
  "navbar",
  "hero",
  "founder",
  "missionVision",
  "objectives",
  "communityProject",
  "gallery",
  "testimonials",
  "partner",
  "board",
  "contact",
  "footer",
];

/* ── Main fetch function ─────────────────────────────────────────────── */
export async function fetchSiteContent(): Promise<SiteContent> {
  // No backend URL configured → use defaults immediately
  if (!API_BASE) {
    return defaults;
  }

  try {
    const res = await fetch(`${API_BASE}/api/site-content`, {
      next: { revalidate: 60 }, // ISR — re-fetch every 60 s
    });

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    const data: Partial<SiteContent> = await res.json();

    // Merge: each missing section falls back to its default
    const merged: SiteContent = { ...defaults };
    for (const key of SECTION_KEYS) {
      if (data[key] !== undefined && data[key] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (merged as any)[key] = data[key];
      }
    }

    return merged;
  } catch (err) {
    console.error("[fetchSiteContent] Failed to fetch site content, using defaults:", err);
    return defaults;
  }
}
