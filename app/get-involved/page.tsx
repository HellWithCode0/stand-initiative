import Link from "next/link";
import { Ball } from "@/components/Ball";
import { PageIntro } from "@/components/PageIntro";
import { AmbassadorForm } from "@/components/forms/AmbassadorForm";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/get-involved",
  "Get involved",
  "Donate, become a STAND Out ambassador, run a fundraiser at your school, or partner with STAND.",
);

const ways = [
  {
    id: "donate",
    ball: "red" as const,
    title: "Donate",
    text: "Fund adaptive sporting equipment for children and young people with disabilities.",
  },
  {
    id: "ambassador",
    ball: "blue" as const,
    title: "Become an ambassador",
    text: "Train with the STAND Out toolkit and lead change in your own school.",
  },
  {
    id: "fundraise",
    ball: "jack" as const,
    title: "Run a fundraiser",
    text: "Turn a school event into support for the equipment fund.",
  },
  {
    id: "partner",
    ball: "ink" as const,
    title: "Partner with us",
    text: "Schools, clubs, disability organisations and companies can work with STAND.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro
        kicker="Get involved"
        title="Pick your way to help."
        ball="red"
        lede="Students, families, teachers and organisations all have a part to play. Start with the one that fits you."
      />

      <section className="section section-tight" aria-label="Ways to help">
        <div className="container">
          <ul className="ways">
            {ways.map((w) => (
              <li key={w.id} className="way stretched-host">
                <Ball colour={w.ball} size={40} />
                <h2 className="way-title">
                  <Link href={w.id === "donate" ? "/donate" : `#${w.id}`} className="stretched">
                    {w.title}
                  </Link>
                </h2>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="ambassador-title">
        <div className="container two-col">
          <div className="two-col-side">
            <p className="kicker">
              <span className="kicker-num">01</span>Volunteer
            </p>
            <h2 className="display section-title" id="ambassador-title">
              Become a STAND Out ambassador.
            </h2>
            <div className="prose">
              <p>
                Ambassadors are students who complete the six module STAND Out toolkit, then champion
                disability inclusive sport in their own school and community.
              </p>
              <p>You will learn about:</p>
              <ul className="ticks">
                <li>The social model of disability</li>
                <li>Respectful language and communication</li>
                <li>Barriers to sport, physical and attitudinal</li>
                <li>Practical ways to make school sport more inclusive</li>
              </ul>
              <p>
                Teachers, coaches and parents are welcome to apply too, to support ambassadors or
                bring STAND to a school.
              </p>
            </div>
          </div>
          <div className="form-card">
            <h3 className="form-card-title">Apply to join</h3>
            <p className="form-card-note">All fields are required unless marked optional.</p>
            <AmbassadorForm />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="fundraise">
        <div className="container two-col">
          <div className="two-col-side">
            <p className="kicker">
              <span className="kicker-num">02</span>Fundraise
            </p>
            <h2 className="display section-title" id="fundraise">
              Run a fundraiser.
            </h2>
          </div>
          <div className="prose">
            <p className="lede">
              A sports day, a bake sale or a sponsored challenge: almost any school event can raise
              money for adaptive sporting equipment.
            </p>
            <p>
              Tell us your plan before you start. That way we can make sure the money you raise reaches
              the equipment fund, and we can thank everyone who took part.
            </p>
            <p>
              <Link href="/contact?topic=fundraising" className="btn btn-secondary">
                Tell us about your fundraiser
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="partner">
        <div className="container two-col">
          <div className="two-col-side">
            <p className="kicker">
              <span className="kicker-num">03</span>Partner
            </p>
            <h2 className="display section-title" id="partner">
              Partner with us.
            </h2>
          </div>
          <div className="prose">
            <p className="lede">
              We work best alongside people who already know this ground.
            </p>
            <ul className="partner-types">
              <li>
                <strong>Schools</strong> can host ambassadors and use the STAND Out toolkit.
              </li>
              <li>
                <strong>Disability organisations and sports clubs</strong> can help us direct equipment
                where it is needed and share expertise for the interview series.
              </li>
              <li>
                <strong>Companies and institutions</strong> can fund equipment or support events.
              </li>
            </ul>
            <p>
              <Link href="/contact?topic=partnership" className="btn btn-primary">
                Start a conversation
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
