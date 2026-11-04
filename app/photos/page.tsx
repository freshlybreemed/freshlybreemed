import type { Metadata } from "next";

export const metadata: Metadata = { title: "Photos" };

/** Photo albums. Will read from a Supabase Storage bucket (one folder per album); empty for now. */
export default function Photos() {
  return (
    <section className="section section-first">
      <h1 className="section-title">Photos</h1>
      <p className="photos-empty">New shoots coming soon.</p>
    </section>
  );
}
