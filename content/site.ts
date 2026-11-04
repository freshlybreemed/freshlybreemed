/** Everything the site says lives here, so copy edits never touch layout. */

export const profile = {
  name: "Ebrima Jobe",
  handle: "freshlybreemed",
  city: "New York",
  intro:
    "Software engineer, DJ and photographer in New York. I build ticketing for parties, and on weekends I'm the one playing them. I also take on client sites with a small team of designers, writers and engineers.",
  origin:
    "First-generation Gambian American from Silver Spring, by way of LA. Hampton University alum.",
  photo: "/static/img/breemz.jpg",
  email: "freshlybreemed@gmail.com",
};

export const links = [
  { label: "GitHub", href: "https://github.com/freshlybreemed" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ebrimajobe" },
  { label: "SoundCloud", href: "https://soundcloud.com/freshlybreemed" },
  { label: "Instagram", href: "https://instagram.com/freshlybreemed" },
];

export const ticket = {
  title: "TBA and Offerbased",
  subtitle: "Ticketing I built, ran and rebuilt. Counts are from LaRussell's shows alone.",
  serial: "4,489 commits",
  fields: [
    { label: "Shows", value: "247" },
    { label: "Orders", value: "35,433" },
    { label: "Fans", value: "25,527" },
  ],
};

export type Project = {
  name: string;
  years: string;
  summary: string;
  decisions: string[];
  stack: string;
  post?: { href: string; title: string };
  href?: string;
  /** Homepage screenshot, 1200x750. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Offerbased",
    years: "2026",
    summary:
      "A ground-up rebuild of TBA around name-your-price tickets. Organizers get paid the moment a fan buys, and fans can make an offer instead of paying a fixed price.",
    decisions: [
      "Moved from MongoDB to Postgres. Orders, tickets and offers are separate rows, so buyers and attendees can't be confused anymore.",
      "Offers place a $1 hold that saves the card. The full amount is only charged if the organizer accepts, so fans aren't frozen out of their money for a week.",
      "Access rules live in the database with row-level security, instead of being re-checked in every API route.",
      "Migrated TBA's events and order history, and redirected upcoming events so no fan link broke.",
    ],
    stack: "Next.js, tRPC, Supabase Postgres, Stripe Connect, Twilio, Vercel",
    href: "https://offerbased.com",
    image: "/static/img/work/offerbased.jpg",
  },
  {
    name: "TBA",
    years: "2020 to 2026",
    summary:
      "An event ticketing platform I founded, built and ran for six years. Checkout, door scanning, waitlists, SMS marketing and payouts for independent organizers.",
    decisions: [
      "Moved bulk SMS out of the request cycle into a Redis queue worker once blasts got big enough to time out.",
      "Switched door scanning to a paid scanning SDK, because speed in a dark line is what organizers actually judge.",
      "Added Playwright end-to-end tests before refactoring checkout, which made the rebuild possible later.",
    ],
    stack: "Next.js, MongoDB, Stripe, Paystack, Twilio, Redis, AWS Lambda",
    href: "https://whatstba.com",
    image: "/static/img/work/tba.jpg",
  },
];

/** Smaller builds, shown as one-line cards under the main projects. */
export type SideProject = {
  name: string;
  years: string;
  summary: string;
  href?: string;
  image?: string;
  /** Top brands involved, shown as one line. */
  partners?: string[];
};

export const moreProjects: SideProject[] = [
  {
    name: "Spicoli Scramble",
    years: "2024",
    href: "https://to-be-announced-git-spicoli-scramble-demo-tba-project.vercel.app/",
    image: "/static/img/work/spicoli.jpg",
    partners: ["GRAMMY Museum", "Billboard", "Hypebeast", "lululemon", "Celaya Tequila"],
    summary:
      "Microsite for a charity golf tournament at Topgolf El Segundo, raising money for the Quinn Coleman Memorial Scholarship Fund at the GRAMMY Museum. Player and spectator registration, a waitlist and donations.",
  },
  {
    name: "The Glow Up",
    years: "2022",
    href: "https://to-be-announced-git-unbothered-tba-project.vercel.app/",
    image: "/static/img/work/glowup.jpg",
    partners: ["Refinery29 Unbothered", "Target", "Ulta Beauty", "Dove", "Starz", "The Body Shop", "Clorox"],
    summary:
      "Ticketing microsite for Refinery29 Unbothered's Juneteenth festival in Atlanta, headlined by Kelis and Latto. Sold 500+ tickets.",
  },
  {
    name: "As You Can See",
    years: "2026",
    href: "https://asyoucansee.vercel.app/",
    image: "/static/img/work/aycs.jpg",
    summary:
      "Storefront for a Los Angeles fashion showroom where customers can buy, rent or join a membership.",
  },
  {
    name: "Gogo Garden",
    years: "2021 to 2026",
    href: "https://thegogogarden.com",
    image: "/static/img/work/gogo.jpg",
    summary:
      "Streaming archive for go-go, the Washington, DC music genre: 330 live PA tapes from 56 bands, recorded from 1990 to 2018.",
  },
  {
    name: "Dare Dollz",
    years: "2020 to 2023",
    href: "https://daredollz.com/home.html",
    image: "/static/img/work/daredollz.jpg",
    summary: "Blog and online shop for Dare Dollz, a custom doll brand.",
  },
];

export type Role = { years: string; title: string; org: string };

/** Newest first. */
export const experience: Role[] = [
  { years: "2026", title: "Lead Engineer", org: "Offerbased" },
  { years: "2025", title: "Senior Software Engineer", org: "Intuit" },
  { years: "2022", title: "Software Engineer", org: "FreeWill" },
  { years: "2021", title: "Founder and CTO", org: "TBA" },
  { years: "2021", title: "Software Engineer", org: "Intuit" },
  { years: "2020", title: "Full Stack Engineer, contract", org: "HighSpeed" },
  { years: "2019", title: "Technical Co-founder", org: "Clouty" },
  { years: "2018", title: "Software Engineer, DevOps", org: "Protenus" },
  { years: "2017", title: "TechOps Engineer", org: "Amazon" },
  { years: "2014", title: "Business Technology Consultant", org: "Accenture" },
];

export const education = ["Hampton University (B.S. Computer Information Systems)", "Hack Reactor"];

export const dj = {
  blurb:
    "I DJ parties in New York. A night usually moves from hip-hop into afrobeats, then amapiano, dancehall and Latin, wherever the room wants to go.",
  soundcloud: "https://soundcloud.com/freshlybreemed",
  booking: "freshlybreemed@gmail.com",
};
