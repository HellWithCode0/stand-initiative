import Image from "next/image";
import Link from "next/link";
import { Ball } from "@/components/Ball";
import { PageIntro, SectionHead } from "@/components/PageIntro";
import { Fill, Todo } from "@/components/Todo";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/about",
  "About",
  "STAND's mission, values, theory of change, founder, partner and governance.",
);

const values = [
  {
    name: "Autonomy",
    text: "Young people with disabilities decide how they take part. We create the opening; they choose what to do with it.",
  },
  {
    name: "Dignity",
    text: "We describe people with respect, never as objects of pity, and we share stories only with consent.",
  },
  {
    name: "Meaningful participation",
    text: "Inclusion means a real place in the game, not a token one at the edge of it.",
  },
  {
    name: "Working with others",
    text: "We support the organisations already doing this work, and add what is missing rather than starting over.",
  },
];

const change = [
  {
    barrier: "Low awareness of adaptive sport",
    action: "The STAND Up the Cause interviews and the STAND Out toolkit",
    result: "Students, schools and families understand inclusive sport and what it needs.",
  },
  {
    barrier: "Social and attitudinal barriers",
    action: "Student ambassadors trained with STAND Out",
    result: "Schools where inclusion is expected and respectful language is the norm.",
  },
  {
    barrier: "Inaccessible equipment",
    action: "Fundraising for adaptive equipment, with Help Each Other",
    result: "More adaptive equipment in programmes that serve children with disabilities.",
  },
];

const governance = [
  { term: "Legal status", value: site.legal.status, label: "ADD LEGAL STATUS" },
  { term: "Registration number", value: site.legal.registration, label: "ADD REGISTRATION NUMBER" },
  { term: "Tax exemption (80G)", value: site.legal.taxExemption, label: "ADD 80G STATUS" },
  { term: "Who holds donated funds", value: site.legal.fundHolder, label: "ADD FUND HOLDER" },
  { term: "Oversight", value: site.legal.oversight, label: "ADD ADULT ADVISER OR BOARD" },
];

const documents = [
  { term: "Safeguarding policy", value: site.legal.safeguardingPolicy, label: "ADD SAFEGUARDING POLICY LINK" },
  { term: "Annual report", value: site.reports.annual, label: "ADD ANNUAL REPORT LINK" },
  { term: "Financial statements", value: site.reports.financials, label: "ADD FINANCIAL STATEMENTS LINK" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="About STAND"
        title="A student initiative for inclusive sport."
        ball="blue"
        lede={
          <>
            Sport Training and Assistance New Delhi (STAND) was founded by {site.founder.name} to
            widen access to sport and recreation for children and young people with disabilities.
          </>
        }
      >
        <nav aria-label="On this page" className="jump">
          <a href="#mission">Mission</a>
          <a href="#values">Vision and values</a>
          <a href="#change">Theory of change</a>
          <a href="#team">Team</a>
          <a href="#partners">Partner</a>
          <a href="#governance">Governance</a>
        </nav>
      </PageIntro>

      <section className="section" aria-labelledby="mission">
        <div className="container two-col">
          <div className="two-col-side">
            <SectionHead num="01" kicker="Mission" title="Why STAND exists." id="mission" />
            <p className="pull">
              To make sport and recreation accessible and inclusive for children and young people with
              disabilities, through education, advocacy and adaptive equipment.
            </p>
          </div>
          <div className="prose">
            <p>
              Sport is often recognised for its physical and recreational benefits, but its role in
              building confidence, independence, social participation and a sense of belonging is just
              as significant. For children and young people with disabilities, access to sport can be
              limited by physical infrastructure, inaccessible equipment, low awareness of adaptive
              sports, and social and attitudinal barriers. These barriers restrict the chance to take
              part in recreation and to experience the wider social benefits of sport.
            </p>
            <p>
              STAND was set up with these barriers in mind, and with a desire to make sport more
              accessible and inclusive for children and young people with disabilities. We work on both
              the practical barriers that limit participation and the wider lack of awareness around
              inclusive recreation, while respecting the autonomy, dignity and meaningful participation
              of every young person.
            </p>
            <p>
              Through accessible educational resources, advocacy led by students, community engagement,
              fundraising and the provision of adaptive sporting equipment, STAND aims to build awareness
              of inclusive sport, support existing organisations working on disability, and create more
              opportunities for children and young people with disabilities to take part in recreation
              and sport.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="values">
        <div className="container">
          <SectionHead num="02" kicker="Vision and values" title="What we are working towards." id="values" align="split" />
          <p className="vision">
            A New Delhi where every child with a disability who wants to play can find a place to
            play, the equipment to play with, and people who expect them to belong.
          </p>
          <ul className="values">
            {values.map((v) => (
              <li key={v.name} className="value">
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="change">
        <div className="container">
          <SectionHead
            num="03"
            kicker="Theory of change"
            title="How we expect change to happen."
            id="change"
            align="split"
            lede={
              <p>
                Each barrier gets a matching response. Together they lead to one goal.
              </p>
            }
          />
          <div className="change-head" aria-hidden="true">
            <span>The barrier</span>
            <span>What STAND does</span>
            <span>What changes</span>
          </div>
          <ol className="change">
            {change.map((c) => (
              <li key={c.barrier} className="change-row">
                <div>
                  <span className="change-label">The barrier</span>
                  <p className="change-barrier">{c.barrier}</p>
                </div>
                <div>
                  <span className="change-label">What STAND does</span>
                  <p>{c.action}</p>
                </div>
                <div>
                  <span className="change-label">What changes</span>
                  <p>{c.result}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="goal">
            <Ball colour="jack" size={56} />
            <div>
              <p className="goal-label">The goal</p>
              <p className="goal-text">
                More children and young people with disabilities taking part in sport and recreation,
                with confidence, autonomy and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="team">
        <div className="container">
          <SectionHead num="04" kicker="Team" title="The people behind STAND." id="team" align="split" />
          <article className="profile">
            <div className="profile-photo">
              {site.founder.photo ? (
                <Image
                  src={site.founder.photo}
                  alt={`Portrait of ${site.founder.name}`}
                  width={480}
                  height={600}
                  sizes="(min-width: 960px) 360px, 100vw"
                />
              ) : (
                <div className="photo-slot">
                  <span className="monogram monogram-large" aria-hidden="true">AG</span>
                  <Todo>ADD PHOTO OF AADYA</Todo>
                </div>
              )}
            </div>
            <div className="profile-body">
              <h3 className="profile-name">{site.founder.name}</h3>
              <p className="person-role">Founder</p>
              <div className="prose">
                <p>
                  Aadya Gupta is a Grade 11 student at Sanskriti School, New Delhi, with a strong
                  interest in political science, psychology and development studies, particularly
                  questions of disability inclusion, human rights and social empowerment. Her academic
                  interests centre on how social structures, public policy and institutions shape access
                  to opportunity and the participation of marginalised communities.
                </p>
                <p>
                  She is especially interested in where disability, poverty and social inclusion meet,
                  and in how access to recreation can strengthen individual autonomy, dignity and
                  community participation. Aadya is also a competitive chess player and a Woman FIDE
                  Master, and has represented India at several international tournaments, winning
                  multiple international medals.
                </p>
                <p>
                  Through STAND, she brings these interests together to make sport more accessible to
                  children and young people with disabilities, and to build awareness and advocacy in
                  schools and communities.
                </p>
              </div>
            </div>
          </article>
          <p className="team-more">
            Other team members, mentors and advisers: <Todo>ADD TEAM MEMBERS, OR REMOVE THIS LINE</Todo>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="partners">
        <div className="container two-col">
          <div className="two-col-side">
            <SectionHead num="05" kicker="Partner" title="Working with Help Each Other." id="partners" />
          </div>
          <div className="prose">
            <p>
              Help Each Other is a nongovernmental organisation committed to uplifting communities
              through compassion, collective support and inclusive development. Working across areas
              such as education and healthcare, it addresses community needs and supports people from
              underserved backgrounds. It is guided by the belief that collective action can create
              meaningful change.
            </p>
            <p>
              Through this collaboration, STAND aims to complement existing disability and sports
              programmes, support community engagement and direct the resources it raises towards
              adaptive sporting equipment.
            </p>
            <p>
              Website:{" "}
              <Fill value={site.partner.website} label="ADD HELP EACH OTHER WEBSITE" href={(v) => v} external />
            </p>
            <p>
              <Link href="/contact?topic=partnership" className="arrow-link">
                Partner with STAND
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="governance">
        <div className="container two-col">
          <div className="two-col-side">
            <SectionHead
              num="06"
              kicker="Governance"
              title="How STAND is run, and who checks."
              id="governance"
              lede={
                <p>
                  Donors and partners should be able to see who is responsible for STAND and how its
                  money is handled. These details are published here.
                </p>
              }
            />
          </div>
          <div>
            <dl className="ledger ledger-wide">
              {governance.map((g) => (
                <div key={g.term}>
                  <dt>{g.term}</dt>
                  <dd>
                    <Fill value={g.value} label={g.label} />
                  </dd>
                </div>
              ))}
              {documents.map((d) => (
                <div key={d.term}>
                  <dt>{d.term}</dt>
                  <dd>
                    <Fill value={d.value} label={d.label} href={(v) => v} external />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
