/**
 * Client-safe blog utilities — NO Node.js built-ins.
 * Safe to import from both Server and Client components.
 *
 * All filesystem functions remain in lib/blog.ts (server-only).
 */

/** Format date for display: "May 23, 2025" */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
