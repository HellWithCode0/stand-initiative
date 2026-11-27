import Link from "next/link";
import { Ball } from "@/components/Ball";
import { PageIntro } from "@/components/PageIntro";
import { Todo } from "@/components/Todo";
import { programmes } from "@/content/programmes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/work",
  "Our work",
  "STAND's three programmes: the STAND Out ambassador toolkit, the STAND Up the Cause interview series, and adaptive equipment with Help Each Other.",
);

export default function WorkPage() {
  return (
    <>
      <PageIntro
        kicker="Our work"
        title="Three programmes, one goal."
        ball="red"
        lede="Each programme takes on a different barrier: what people know, what they expect, and what children have to play with."
      >
        <nav aria-label="Programmes" className="jump">
          {programmes.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.name}
            </a>
          ))}
        </nav>
      </PageIntro>

      {programmes.map((p, i) => (
        <section
          key={p.id}
          className={`section programme ${i % 2 === 1 ? "section-deep" : ""}`}
          aria-labelledby={p.id}
        >
          <div className="container programme-grid">
            <header className="programme-side">
              <p className="kicker">
                <span className="kicker-num">{String(i + 1).padStart(2, "0")}</span>
                {p.focus}
              </p>
              <h2 className="display programme-title" id={p.id}>
                {p.name}
              </h2>
              <p className="programme-kind">{p.kind}</p>
              <Ball colour={p.ball} className="programme-ball" size={88} />
              <div className="actions">
                <Link href={p.cta.href} className="btn btn-primary">
                  {p.cta.label}
                </Link>
              </div>
            </header>

            <div className="programme-body">
              <p className="lede">{p.summary}</p>
              <dl className="facts">
                <div>
                  <dt>Who it serves</dt>
                  <dd>{p.serves}</dd>
                </div>
                <div>
                  <dt>{p.covers.title}</dt>
                  <dd>
                    <ul className="ticks">
                      {p.covers.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>How it works</dt>
                  <dd>
                    {p.how}
                    {p.howPending ? (
                      <>
                        {" "}
                        <Todo>{p.howPending}</Todo>
                      </>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt>Intended outcome</dt>
                  <dd>{p.outcome}</dd>
                </div>
                {p.linkLabel ? (
                  <div>
                    <dt>Where to find it</dt>
                    <dd>
                      {p.link ? (
                        <a href={p.link} className="arrow-link" target="_blank" rel="noopener noreferrer">
                          {p.linkLabel}
                        </a>
                      ) : (
                        <Todo>{`ADD LINK TO ${p.name.toUpperCase()}`}</Todo>
                      )}
                    </dd>
                  </div>
                ) : (
                  <div>
                    <dt>Where and with whom</dt>
                    <dd>
                      <Todo>ADD LOCATIONS AND PARTNER PROGRAMMES</Todo>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-band cta-band-slim" aria-labelledby="work-cta">
        <div className="container cta-inline">
          <h2 className="display cta-title" id="work-cta">
            Bring STAND to your school.
          </h2>
          <div className="actions">
            <Link href="/get-involved#ambassador" className="btn btn-light">
              Apply to be an ambassador
            </Link>
            <Link href="/contact?topic=partnership" className="btn btn-ghost-light">
              Talk to us about a partnership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
