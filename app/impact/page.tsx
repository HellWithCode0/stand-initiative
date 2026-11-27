import Link from "next/link";
import { Ball } from "@/components/Ball";
import { PageIntro, SectionHead } from "@/components/PageIntro";
import { Fill, Todo } from "@/components/Todo";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/impact",
  "Impact",
  "What STAND measures, how it reports, and where to find its reports. Only verified figures are published.",
);

/**
 * Set `value` once a figure is verified, for example "24". Until then the
 * card shows an [ADD FIGURE] tag. Never publish an estimate here.
 */
const measures: { label: string; value: string | null; note: string; ball: "red" | "blue" | "jack" }[] = [
  {
    label: "Interviews published",
    value: null,
    note: "Conversations released in the STAND Up the Cause series.",
    ball: "blue",
  },
  {
    label: "Student ambassadors trained",
    value: null,
    note: "Students who completed all six STAND Out modules.",
    ball: "red",
  },
  {
    label: "Schools reached",
    value: null,
    note: "Schools where an ambassador or STAND session has taken place.",
    ball: "blue",
  },
  {
    label: "Equipment items funded",
    value: null,
    note: "Adaptive equipment bought with STAND funds and delivered.",
    ball: "jack",
  },
  {
    label: "Funds raised",
    value: null,
    note: "Total in rupees, as shown in our financial statements.",
    ball: "red",
  },
  {
    label: "Partner programmes supported",
    value: null,
    note: "Programmes, run with or by Help Each Other, that received support.",
    ball: "jack",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageIntro
        kicker="Impact"
        title="What we measure, and how we report it."
        ball="jack"
        lede="STAND is a young initiative. We publish only figures we can verify, and this page grows as each programme reports."
      />

      <section className="section" aria-labelledby="measures-title">
        <div className="container">
          <SectionHead
            num="01"
            kicker="Measures"
            title="The numbers we track."
            id="measures-title"
            align="split"
            lede={<p>Each figure is counted the same way every year, so progress can be compared fairly.</p>}
          />
          <ul className="measures">
            {measures.map((m) => (
              <li key={m.label} className="measure">
                <Ball colour={m.ball} size={28} />
                <p className="measure-value">{m.value ?? <Todo>ADD FIGURE</Todo>}</p>
                <h3 className="measure-label">{m.label}</h3>
                <p className="measure-note">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="stories-title">
        <div className="container">
          <SectionHead
            num="02"
            kicker="Stories"
            title="In their own words."
            id="stories-title"
            align="split"
            lede={
              <p>
                Stories appear here only with the informed consent of the people in them, and of a
                parent or guardian for anyone under 18.
              </p>
            }
          />
          <div className="stories">
            {[1, 2].map((n) => (
              <figure key={n} className="story">
                <div className="story-photo" aria-hidden="true">
                  <Ball colour={n === 1 ? "red" : "blue"} size="100%" />
                </div>
                <blockquote>
                  <p>
                    <Todo>{`ADD VERIFIED STORY ${n}, SHARED WITH CONSENT`}</Todo>
                  </p>
                </blockquote>
                <figcaption>
                  <Todo>ADD NAME OR ROLE, AS THEY CHOOSE</Todo>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="reports-title">
        <div className="container two-col">
          <div className="two-col-side">
            <SectionHead
              num="03"
              kicker="Reports"
              title="Read the full picture."
              id="reports-title"
              lede={<p>Each report will show what we did, what it cost and what we learned.</p>}
            />
          </div>
          <dl className="ledger ledger-wide">
            <div>
              <dt>Annual report</dt>
              <dd>
                <Fill value={site.reports.annual} label="ADD ANNUAL REPORT LINK" href={(v) => v} external />
              </dd>
            </div>
            <div>
              <dt>Financial statements</dt>
              <dd>
                <Fill value={site.reports.financials} label="ADD FINANCIAL STATEMENTS LINK" href={(v) => v} external />
              </dd>
            </div>
            <div>
              <dt>Audit</dt>
              <dd>
                <Fill value={site.reports.audit} label="ADD AUDIT LINK, IF ONE EXISTS" href={(v) => v} external />
              </dd>
            </div>
            <div>
              <dt>Governance</dt>
              <dd>
                <Link href="/about#governance">How STAND is run</Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section cta-band cta-band-slim" aria-labelledby="impact-cta">
        <div className="container cta-inline">
          <h2 className="display cta-title" id="impact-cta">
            Help write the first report.
          </h2>
          <div className="actions">
            <Link href="/donate" className="btn btn-light">
              Donate
            </Link>
            <Link href="/get-involved" className="btn btn-ghost-light">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
