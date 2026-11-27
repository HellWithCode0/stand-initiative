import type { CSSProperties } from "react";

type Piece = { x: number; y: number; r: number; kind: "red" | "blue" | "jack"; box: number };

// Balls arrive from the throwing boxes along the bottom edge, one at a time.
const pieces: Piece[] = [
  { x: 252, y: 214, r: 13, kind: "jack", box: 3 },
  { x: 270, y: 158, r: 21, kind: "blue", box: 4 },
  { x: 222, y: 194, r: 21, kind: "red", box: 3 },
  { x: 336, y: 206, r: 21, kind: "blue", box: 5 },
  { x: 300, y: 266, r: 21, kind: "red", box: 4 },
  { x: 196, y: 262, r: 21, kind: "blue", box: 2 },
  { x: 150, y: 318, r: 21, kind: "red", box: 1 },
];

const BOX_W = 72;
const LEFT = 24;
const THROW_LINE = 496;
const BOTTOM = 576;

export function CourtArt() {
  return (
    <svg
      className="court-art"
      viewBox="0 0 480 600"
      role="img"
      aria-labelledby="court-title"
    >
      <title id="court-title">
        A boccia court seen from above. Red and blue balls are gathered around the small white jack.
      </title>

      <g className="court-lines">
        <rect x={LEFT} y={24} width={432} height={552} />
        <line x1={LEFT} y1={THROW_LINE} x2={456} y2={THROW_LINE} />
        {[1, 2, 3, 4, 5].map((k) => (
          <line key={k} x1={LEFT + BOX_W * k} y1={THROW_LINE} x2={LEFT + BOX_W * k} y2={BOTTOM} />
        ))}
        <polyline points={`${LEFT},440 240,380 456,440`} />
        <line x1={228} y1={220} x2={252} y2={220} />
        <line x1={240} y1={208} x2={240} y2={232} />
      </g>

      <g className="court-numbers" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <text key={n} x={LEFT + BOX_W * (n - 0.5)} y={544} textAnchor="middle">
            {n}
          </text>
        ))}
      </g>

      {pieces.map((p, i) => {
        const startX = LEFT + BOX_W * (p.box - 0.5);
        const style = {
          "--dx": `${startX - p.x}px`,
          "--dy": `${536 - p.y}px`,
          "--delay": `${0.25 + i * 0.16}s`,
        } as CSSProperties;
        return (
          <g key={i} className="court-piece" style={style}>
            <ellipse
              className="court-shadow"
              cx={p.x + p.r * 0.25}
              cy={p.y + p.r * 0.9}
              rx={p.r * 0.95}
              ry={p.r * 0.32}
            />
            <circle className={`court-ball court-${p.kind}`} cx={p.x} cy={p.y} r={p.r} />
            {p.kind !== "jack" && (
              <path
                className="court-seam"
                d={`M${p.x - p.r * 0.55} ${p.y - p.r * 0.62} Q ${p.x + p.r * 0.05} ${p.y} ${p.x - p.r * 0.55} ${p.y + p.r * 0.62}`}
              />
            )}
            <circle
              className="court-shine"
              cx={p.x - p.r * 0.32}
              cy={p.y - p.r * 0.36}
              r={p.r * 0.24}
            />
          </g>
        );
      })}
    </svg>
  );
}
