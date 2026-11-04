import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { profile } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description: profile.intro,
  metadataBase: new URL("https://freshlybreemed.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
