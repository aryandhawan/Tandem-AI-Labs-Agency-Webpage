import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tandem AI Labs — Custom RAG systems, agentic AI, and workflow automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Top: brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
              opacity: 0.6,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Tandem AI Labs
          </span>
        </div>

        {/* Centre: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Automate the Grind.</span>
            <span>Own the Growth.</span>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "640px",
              display: "flex",
            }}
          >
            Custom RAG systems, agentic AI, and workflow automation — built end-to-end.
          </div>
        </div>

        {/* Bottom: domain + services */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px", fontFamily: "monospace" }}>
            tandem-ai.tech
          </span>
          <div style={{ display: "flex", gap: "32px" }}>
            {["RAG Systems", "AI Automation", "Custom Integrations"].map((s) => (
              <span
                key={s}
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
