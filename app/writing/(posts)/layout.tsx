import Link from "next/link";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose">
      <p className="prose-back">
        <Link href="/writing">All writing</Link>
      </p>
      {children}
    </article>
  );
}
