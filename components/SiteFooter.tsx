import Link from "next/link";
import { site } from "@/content/site";
import { Mark } from "./Mark";
import { Fill, Todo } from "./Todo";
import { NewsletterForm } from "./forms/NewsletterForm";

const columns = [
  {
    title: "STAND",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission", href: "/about#mission" },
      { label: "Team", href: "/about#team" },
      { label: "Governance", href: "/about#governance" },
    ],
  },
  {
    title: "Our work",
    links: [
      { label: "STAND Out toolkit", href: "/work#stand-out" },
      { label: "STAND Up the Cause", href: "/work#stand-up-the-cause" },
      { label: "Adaptive equipment", href: "/work#equipment" },
      { label: "Impact", href: "/impact" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Take part",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Become an ambassador", href: "/get-involved#ambassador" },
      { label: "Partner with us", href: "/get-involved#partner" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <Mark />
            <span className="brand-text">
              <span className="brand-name">STAND</span>
              <span className="brand-full">Sport Training and Assistance New Delhi</span>
            </span>
          </Link>
          <p className="footer-about">
            A student led initiative making sport and recreation accessible to children and young
            people with disabilities. Based in {site.city}.
          </p>
          <NewsletterForm id="footer-newsletter" />
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h2 className="footer-heading">{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>
          Email{" "}
          <Fill value={site.contact.general} label="ADD EMAIL" href={(v) => `mailto:${v}`} />
        </p>
        <p>
          Follow{" "}
          {site.social.length ? (
            site.social.map((s, i) => (
              <span key={s.href}>
                {i > 0 ? ", " : null}
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </span>
            ))
          ) : (
            <Todo>ADD SOCIAL LINKS</Todo>
          )}
        </p>
        <p>
          Registration <Fill value={site.legal.registration} label="ADD REGISTRATION DETAILS" />
        </p>
        <p>© 2026 STAND</p>
      </div>
    </footer>
  );
}
