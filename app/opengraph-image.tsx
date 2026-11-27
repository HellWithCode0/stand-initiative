import { ImageResponse } from "next/og";

export const alt = "STAND, Sport Training and Assistance New Delhi. Clear the way to play.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#142038";
const PAPER = "#f5f1e8";
const RED = "#d9473b";
const BLUE = "#3a6fe0";

function Ball({ x, y, r, fill, ring }: { x: number; y: number; r: number; fill: string; ring?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x - r,
        top: y - r,
        width: r * 2,
        height: r * 2,
        borderRadius: r,
        background: fill,
        border: ring ? `4px solid ${INK}` : "none",
      }}
    />
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER, color: INK }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 0 72px 80px",
            width: 700,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, textTransform: "uppercase" }}>
            Sport Training and Assistance New Delhi
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 150, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>STAND</div>
            <div style={{ fontSize: 56, fontWeight: 700, marginTop: 16 }}>Clear the way to play.</div>
          </div>
          <div style={{ display: "flex", fontSize: 26 }}>
            Inclusive sport for children and young people with disabilities
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", flex: 1, background: INK }}>
          <div
            style={{
              position: "absolute",
              left: 40,
              top: 40,
              right: 40,
              bottom: 40,
              border: "3px solid rgba(245,241,232,0.45)",
            }}
          />
          <Ball x={230} y={300} r={44} fill={RED} />
          <Ball x={300} y={230} r={44} fill={BLUE} />
          <Ball x={290} y={318} r={26} fill="#ffffff" />
          <Ball x={170} y={210} r={44} fill={BLUE} />
          <Ball x={360} y={380} r={44} fill={RED} />
        </div>
      </div>
    ),
    size,
  );
}
