import Link from "next/link";
import { profile } from "@/content/site";

export default function SiteNav() {
  return (
    <header className="nav">
      <Link href="/" className="nav-name">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="nav-logo" src="/static/img/freshy-144.png" alt="" width={48} height={43} />
        {profile.name}
      </Link>
      <nav aria-label="Main">
        <ul className="nav-links">
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/photos">Photos</Link></li>
          <li><Link href="/#mixes">Mixes</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
