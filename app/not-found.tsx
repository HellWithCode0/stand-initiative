import Link from "next/link";
import { Ball } from "@/components/Ball";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section lost">
      <div className="container lost-inner">
        <Ball colour="red" size={96} className="lost-ball" />
        <p className="kicker">Error 404</p>
        <h1 className="display intro-title">Out of court.</h1>
        <p className="lede">
          This page does not exist, or it has moved. The links below will get you back into play.
        </p>
        <div className="actions">
          <Link href="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link href="/work" className="btn btn-secondary">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
