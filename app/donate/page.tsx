import Link from "next/link";
import { Ball } from "@/components/Ball";
import { DonateWidget } from "@/components/DonateWidget";
import { Faq } from "@/components/Faq";
import { PageIntro, SectionHead } from "@/components/PageIntro";
import { Fill, Todo } from "@/components/Todo";
import { donateFaq } from "@/content/donate";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/donate",
  "Donate",
  "Donate to STAND to fund adaptive sporting equipment for children and young people with disabilities in New Delhi.",
);

export default function DonatePage() {
  return (
    <>
      <PageIntro
        kicker="Donate"
        title="Fund adaptive equipment."
        ball="red"
        lede="A child can be ready to play and still have nothing to play with. The money STAND raises goes towards adaptive sporting equipment, through our collaboration with Help Each Other."
      />

      <section className="section section-tight" aria-label="Donation form and details">
        <div className="container donate-grid">
          <DonateWidget />

          <div className="donate-info">
            <section aria-labelledby="where-title" className="info-block">
              <h2 className="info-title" id="where-title">
                Where your money goes
              </h2>
              <ul className="uses">
                <li>
                  <Ball colour="jack" size={28} />
                  <div>
                    <h3>Adaptive sporting equipment</h3>
                    <p>
                      Equipment that lets children and young people with disabilities take part in
                      sport and recreation, directed through Help Each Other.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="info-note">
                Breakdown of spending: <Todo>ADD HOW FUNDS ARE SPLIT, ONCE CONFIRMED</Todo>
              </p>
            </section>

            <section aria-labelledby="trust-title" className="info-block">
              <h2 className="info-title" id="trust-title">
                Before you give
              </h2>
              <dl className="ledger">
                <div>
                  <dt>Received by</dt>
                  <dd>
                    <Fill value={site.legal.fundHolder} label="ADD WHO RECEIVES DONATIONS" />
                  </dd>
                </div>
                <div>
                  <dt>Tax deduction</dt>
                  <dd>
                    <Fill value={site.legal.taxExemption} label="ADD 80G STATUS" />
                  </dd>
                </div>
                <div>
                  <dt>Registration</dt>
                  <dd>
                    <Fill value={site.legal.registration} label="ADD REGISTRATION NUMBER" />
                  </dd>
                </div>
                <div>
                  <dt>Reports</dt>
                  <dd>
                    <Link href="/impact#reports-title">Annual report and accounts</Link>
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="faq-title">
        <div className="container two-col">
          <div className="two-col-side">
            <SectionHead
              kicker="Questions"
              title="Giving, answered."
              id="faq-title"
              lede={
                <p>
                  Something not covered here?{" "}
                  <Link href="/contact?topic=donation">Ask us directly</Link>.
                </p>
              }
            />
          </div>
          <Faq items={donateFaq} />
        </div>
      </section>
    </>
  );
}
