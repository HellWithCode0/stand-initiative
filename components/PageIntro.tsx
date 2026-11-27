import type { ReactNode } from "react";
import type { Ball as BallColour } from "@/content/programmes";
import { Ball } from "./Ball";

/** The opening block of every inner page: a ball resting on the base line. */
export function PageIntro({
  kicker,
  title,
  lede,
  ball,
  children,
}: {
  kicker: string;
  title: string;
  lede?: ReactNode;
  ball: BallColour;
  children?: ReactNode;
}) {
  return (
    <div className="intro">
      <div className="container intro-inner">
        <p className="kicker">{kicker}</p>
        <h1 className="display intro-title">{title}</h1>
        {lede ? <p className="lede intro-lede">{lede}</p> : null}
        {children ? <div className="intro-extra">{children}</div> : null}
      </div>
      <div className="container intro-base">
        <div className="intro-ball">
          <Ball colour={ball} size="100%" />
        </div>
      </div>
    </div>
  );
}

/** Numbered heading used at the top of each section. */
export function SectionHead({
  num,
  kicker,
  title,
  lede,
  id,
  align = "start",
}: {
  num?: string;
  kicker: string;
  title: string;
  lede?: ReactNode;
  id?: string;
  align?: "start" | "split";
}) {
  return (
    <div className={`section-head section-head-${align}`}>
      <p className="kicker">
        {num ? <span className="kicker-num">{num}</span> : null}
        {kicker}
      </p>
      <h2 className="display section-title" id={id}>
        {title}
      </h2>
      {lede ? <div className="section-lede">{lede}</div> : null}
    </div>
  );
}
