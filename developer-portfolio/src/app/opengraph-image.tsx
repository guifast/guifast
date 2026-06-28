import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const alt = "Guilherme Fath | Full-Stack Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#080A0F",
        color: "#F7F8FA",
        padding: 72,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          color: "#60A5FA",
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Brazil-based product engineer
      </div>
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 76,
            lineHeight: 0.98,
            letterSpacing: -2,
            maxWidth: 930,
          }}
        >
          {profile.name}
        </h1>
        <p
          style={{
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.25,
            color: "#A8AFBD",
            maxWidth: 980,
          }}
        >
          {profile.positioning}
        </p>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#F7F8FA" }}>
        <span>SaaS platforms</span>
        <span style={{ color: "#60A5FA" }}>·</span>
        <span>Business systems</span>
        <span style={{ color: "#60A5FA" }}>·</span>
        <span>AI integrations</span>
      </div>
    </div>,
    size,
  );
}
