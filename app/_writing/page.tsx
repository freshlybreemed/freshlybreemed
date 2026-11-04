import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, posts } from "@/content/posts";

export const metadata: Metadata = { title: "Writing" };

export default function Writing() {
  return (
    <section className="section section-first">
      <h1 className="section-title">Writing</h1>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/writing/${p.slug}`} className="post-link">
              {p.title}
            </Link>
            <p className="post-summary">{p.summary}</p>
            <time dateTime={p.date}>{formatDate(p.date)}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
