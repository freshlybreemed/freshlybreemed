import { links, profile } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer-title">Say hello</h2>
      <a className="footer-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="footer-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <p className="footer-fine">
        {profile.city}, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
