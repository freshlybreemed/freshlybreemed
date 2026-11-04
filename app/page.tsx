import Link from "next/link";
import Ticket from "@/components/Ticket";
import { dj, education, experience, moreProjects, profile, projects } from "@/content/site";

function Shot({ src, href, name }: { src: string; href?: string; name: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  const img = <img className="shot" src={src} alt={`${name} homepage`} width={1200} height={750} loading="lazy" />;
  return href ? <a href={href} className="shot-link" target="_blank" rel="noopener noreferrer">{img}</a> : img;
}


export default function Home() {
  const [first, last] = profile.name.split(" ");

  return (
    <>
      <section className="hero">
        <h1 className="hero-name">
          <span>{first}</span>
          <span>{last}</span>
        </h1>
        <div className="hero-text">
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-origin">{profile.origin}</p>
          <Ticket />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src={profile.photo} alt="Ebrima Jobe at his turntables at home" width={1200} height={800} />
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <h2 className="section-title" id="work-title">
          Work
        </h2>
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <header className="project-head">
                <h3 className="project-name">
                  {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}
                </h3>
                <p className="project-years">{p.years}</p>
              </header>
              <div className="project-body">
                {p.image && <Shot src={p.image} href={p.href} name={p.name} />}
                <p className="project-summary">{p.summary}</p>
                <h4 className="project-sub">Decisions that mattered</h4>
                <ul className="project-decisions">
                  {p.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="project-stack">{p.stack}</p>
                {p.post && (
                  <p className="project-post">
                    Read more: <Link href={p.post.href}>{p.post.title}</Link>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <h3 className="more-work-title">More work</h3>
        <ul className="more-work">
          {moreProjects.map((p) => (
            <li key={p.name}>
              <p className="more-work-head">
                <strong>{p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}</strong>
                <span className="project-years">{p.years}</span>
              </p>
              <p className="more-work-summary">{p.summary}</p>
              {p.partners && <p className="project-partners">With {p.partners.join(", ")}</p>}
              {p.image && <Shot src={p.image} href={p.href} name={p.name} />}
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="experience" aria-labelledby="exp-title">
        <h2 className="section-title" id="exp-title">
          Experience
        </h2>
        <ol className="timeline">
          {experience.map((r) => (
            <li key={`${r.org}-${r.title}`}>
              <span className="timeline-year">{r.years}</span>
              <span className="timeline-role">
                {r.title}, <strong>{r.org}</strong>
              </span>
            </li>
          ))}
        </ol>
        <p className="education">Studied at {education.join(" and ")}.</p>
      </section>

      <section className="section mixes" id="mixes" aria-labelledby="mixes-title">
        <h2 className="section-title" id="mixes-title">
          Mixes
        </h2>
        <div className="mixes-body">
          <div>
            <p className="mixes-blurb">{dj.blurb}</p>
            <p className="mixes-booking">
              For bookings, email <a href={`mailto:${dj.booking}`}>{dj.booking}</a>.
            </p>
          </div>
          <iframe
            className="mixes-player"
            title="Ebrima's mixes on SoundCloud"
            loading="lazy"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
              dj.soundcloud,
            )}&color=%23111111&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`}
          />
        </div>
      </section>

    </>
  );
}
