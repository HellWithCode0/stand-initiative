import type { Ball as BallColour } from "@/content/programmes";

/**
 * A flat boccia ball. Red, blue and the white jack are the three colours of
 * the game, and of this site. Purely decorative, so it is hidden from
 * assistive technology.
 */
export function Ball({
  colour,
  size = 40,
  className,
}: {
  colour: BallColour | "ink";
  size?: number | string;
  className?: string;
}) {
  return (
    <svg
      className={["ball", `ball-${colour}`, className].filter(Boolean).join(" ")}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <circle className="ball-body" cx="50" cy="50" r="47" />
      <path className="ball-seam" d="M21 19 Q 48 50 21 81" />
      <path className="ball-seam" d="M79 19 Q 52 50 79 81" />
      <circle className="ball-shine" cx="37" cy="31" r="11" />
    </svg>
  );
}
