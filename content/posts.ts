/** Index of MDX posts under app/writing/(posts). Add an entry when adding a post. */

export type Post = { slug: string; title: string; date: string; summary: string };

export const posts: Post[] = [
  {
    slug: "counters-are-caches",
    title: "Counters are caches, rows are truth",
    date: "2026-10-17",
    summary:
      "Most of the worst bugs in six years of running TBA came from one data-model habit. Here's what it was and how the rebuild fixed it.",
  },
  {
    slug: "a-one-dollar-hold",
    title: "Why an offer starts with a $1 hold",
    date: "2026-10-17",
    summary:
      "Name-your-price tickets need a card on file without freezing a fan's money for a week. The Stripe flow behind Offerbased offers.",
  },
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
