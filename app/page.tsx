import Link from "next/link";
import { Ball } from "@/components/Ball";
import { CourtArt } from "@/components/CourtArt";
import { SectionHead } from "@/components/PageIntro";
import { Fill } from "@/components/Todo";
import { programmes } from "@/content/programmes";
import { site } from "@/content/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const barriers = [
  {
    title: "Places not built for everyone",
    text: "Grounds, courts and facilities that many children cannot reach, enter or use.",
  },
  {
    title: "Equipment that does not fit",
    text: "Without adaptive equipment, a child can be ready to play and still have nothing to play with.",
  },
  {
    title: "Little awareness of adaptive sport",
    text: "Many schools and families do not know which adaptive sports exist, or how to begin.",
  },
  {
    title: "Attitudes that sideline",
    text: "Low expectations and social barriers keep children watching from the edge of the game.",
  },
];

const strands = [
  {
    verb: "Learn",
    ball: "blue" as const,
    text: "Educational resources that carry the experience of para athletes and inclusive sport professionals into schools.",
  },
  {
    verb: "Advocate",
    ball: "red" as const,
    text: "Students trained to champion inclusive sport in their own schools and communities.",
  },
  {
    verb: "Equip",
    ball: "jack" as const,
    text: "Funds raised for adaptive sporting equipment, directed through our partner Help Each Other.",
  },
  {
    verb: "Support",
    ball: "ink" as const,
    text: "Community engagement that strengthens organisations already working on disability, rather than duplicating them.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">Inclusive sport in New Delhi</p>
            <h1 className="display hero-title" id="hero-title">
              Clear the way to&nbsp;play.
            </h1>
            <p className="lede hero-lede">
              STAND is a student led initiative in New Delhi. We work to remove the barriers that keep
              children and young people with disabilities out of sport, so more of them can play with
              confidence, independence and a sense of belonging.
            </p>
            <div className="actions">
              <Link href="/donate" className="btn btn-primary">
                Donate
              </Link>
              <Link href="/get-involved" className="btn btn-secondary">
                Get involved
              </Link>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Founded by</dt>
                <dd>{site.founder.name}, {site.founder.school}</dd>
              </div>
              <div>
                <dt>NGO partner</dt>
                <dd>{site.partner.name}</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-court">
            <CourtArt />
            <figcaption>
              Our colours come from boccia, a Paralympic sport: red, blue and the white jack.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHead
            num="01"
            kicker="Why it matters"
            title="Sport gives more than exercise."
            id="why-title"
            align="split"
            lede={
              <p>
                Sport builds confidence, independence and belonging. For many children and young
                people with disabilities, the chance to play is limited long before the game begins.
              </p>
            }
          />
          <h3 className="subhead">What stands in the way</h3>
          <ol className="barriers">
            {barriers.map((b, i) => (
              <li key={b.title} className="barrier">
                <span className="barrier-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="barrier-title">{b.title}</h4>
                <p>{b.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="approach-title">
        <div className="container">
          <SectionHead
            num="02"
            kicker="Our approach"
            title="Four ways we clear the way."
            id="approach-title"
            align="split"
            lede={
              <p>
                Making a facility available is not enough on its own. Real participation also needs
                awareness, respect and the right equipment. We work on all of these together.
              </p>
            }
          />
          <ul className="strands">
            {strands.map((s) => (
              <li key={s.verb} className="strand">
                <Ball colour={s.ball} size={44} />
                <h3 className="strand-verb">{s.verb}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="section-link">
            <Link href="/about#change" className="arrow-link">
              How we expect change to happen
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            num="03"
            kicker="Our work"
            title="Three programmes, one goal."
            id="work-title"
            align="split"
            lede={
              <p>
                Each programme takes on a different barrier: what people know, what they expect, and
                what children have to play with.
              </p>
            }
          />
          <ul className="programme-cards">
            {programmes.map((p) => (
              <li key={p.id} className={`programme-card programme-${p.ball} stretched-host`}>
                <Ball colour={p.ball} className="programme-card-ball" size="100%" />
                <p className="programme-focus">{p.focus}</p>
                <h3 className="programme-name">
                  <Link href={`/work#${p.id}`} className="stretched">
                    {p.name}
                  </Link>
                </h3>
                <p className="programme-kind">{p.kind}</p>
                <p className="programme-summary">{p.summary}</p>
                <span className="arrow-link" aria-hidden="true">
                  Read more
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-trust" aria-labelledby="trust-title">
        <div className="container">
          <SectionHead
            num="04"
            kicker="Who we are"
            title="A student initiative, built on partnership."
            id="trust-title"
            align="split"
            lede={
              <p>
                STAND was founded by a student and works alongside an established NGO. Here is who
                is involved, and where to check the details.
              </p>
            }
          />
          <div className="trust-grid">
            <article className="person-card">
              <div className="monogram" aria-hidden="true">
                AG
              </div>
              <div>
                <h3 className="person-name">{site.founder.name}</h3>
                <p className="person-role">Founder</p>
                <p>
                  A Grade 11 student at Sanskriti School, New Delhi, with a focus on disability
                  inclusion, human rights and social empowerment. She is also a Woman FIDE Master
                  who has represented India in international chess.
                </p>
                <Link href="/about#team" className="arrow-link">
                  Read Aadya&rsquo;s full profile
                </Link>
              </div>
            </article>

            <dl className="ledger">
              <div>
                <dt>NGO partner</dt>
                <dd>
                  <Link href="/about#partners">{site.partner.name}</Link>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{site.city}</dd>
              </div>
              <div>
                <dt>Legal status</dt>
                <dd>
                  <Fill value={site.legal.status} label="ADD LEGAL STATUS" />
                </dd>
              </div>
              <div>
                <dt>Registration</dt>
                <dd>
                  <Fill value={site.legal.registration} label="ADD REGISTRATION NUMBER" />
                </dd>
              </div>
              <div>
                <dt>Annual report</dt>
                <dd>
                  <Fill
                    value={site.reports.annual}
                    label="ADD ANNUAL REPORT LINK"
                    href={(v) => v}
                    external
                  />
                </dd>
              </div>
              <div>
                <dt>Impact so far</dt>
                <dd>
                  <Link href="/impact">What we measure and report</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="cta-title">
        <div className="container">
          <h2 className="display cta-title" id="cta-title">
            Two ways to help today.
          </h2>
          <div className="cta-grid">
            <div className="cta-card cta-card-red">
              <h3>Fund adaptive equipment</h3>
              <p>
                The money STAND raises goes towards adaptive sporting equipment for children and young
                people with disabilities, through our collaboration with Help Each Other.
              </p>
              <Link href="/donate" className="btn btn-light">
                Donate
              </Link>
            </div>
            <div className="cta-card cta-card-paper">
              <h3>Become an ambassador</h3>
              <p>
                Students can train with the STAND Out toolkit and lead change on inclusive sport in
                their own school.
              </p>
              <Link href="/get-involved#ambassador" className="btn btn-secondary">
                Apply to join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
