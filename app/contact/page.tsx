import { PageIntro } from "@/components/PageIntro";
import { Fill, Todo } from "@/components/Todo";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/contact",
  "Contact",
  "Contact STAND about partnerships, media and interviews, donations or general questions.",
);

const routes = [
  {
    title: "Partnerships",
    text: "Schools, clubs, disability organisations and companies.",
    value: site.contact.partnerships,
    label: "ADD PARTNERSHIPS EMAIL",
  },
  {
    title: "Media and interviews",
    text: "Press requests, and suggestions for STAND Up the Cause.",
    value: site.contact.media,
    label: "ADD MEDIA EMAIL",
  },
  {
    title: "Support and questions",
    text: "Donations, volunteering and anything else.",
    value: site.contact.general,
    label: "ADD GENERAL EMAIL",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Talk to us."
        ball="jack"
        lede="Questions, partnership ideas or media requests. Choose the route that fits, or use the form below."
      />

      <section className="section section-tight" aria-labelledby="routes-title">
        <div className="container">
          <h2 className="visually-hidden" id="routes-title">
            Email routes
          </h2>
          <ul className="routes">
            {routes.map((r) => (
              <li key={r.title} className="route">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <p className="route-email">
                  <Fill value={r.value} label={r.label} href={(v) => `mailto:${v}`} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="contact-form-title">
        <div className="container two-col two-col-form">
          <div className="form-card">
            <h2 className="form-card-title" id="contact-form-title">
              Send a message
            </h2>
            <p className="form-card-note">All fields are required.</p>
            <ContactForm />
          </div>
          <div className="contact-aside">
            <h2 className="kicker" id="details-title">
              Details
            </h2>
            <dl className="ledger">
              <div>
                <dt>Based in</dt>
                <dd>{site.city}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <Fill value={site.contact.address} label="ADD ADDRESS, OR REMOVE THIS ROW" />
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <Fill value={site.contact.phone} label="ADD PHONE, OR REMOVE THIS ROW" href={(v) => `tel:${v.replace(/\s/g, "")}`} />
                </dd>
              </div>
              <div>
                <dt>Social</dt>
                <dd>
                  {site.social.length ? (
                    <ul className="inline-list">
                      {site.social.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} target="_blank" rel="noopener noreferrer">
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Todo>ADD SOCIAL LINKS</Todo>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
