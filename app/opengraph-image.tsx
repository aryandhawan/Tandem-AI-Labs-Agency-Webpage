import { ImageResponse } from "next/og";

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
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Sphere — large circle bleeding off top-right, mirrors site hero */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "580px",
            height: "580px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
          }}
        />
        {/* Inner glow dot */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "100px",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "140px",
            right: "220px",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Top: brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* T mark */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0px", position: "relative" }}>
              <div style={{ width: "22px", height: "2.5px", background: "white", borderRadius: "2px", display: "flex" }} />
              <div style={{ width: "2.5px", height: "13px", background: "white", borderRadius: "2px", marginLeft: "9.75px", display: "flex" }} />
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Tandem AI Labs
            </span>
          </div>

          {/* Centre: headline + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Eyebrow line */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.3)", display: "flex" }} />
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", letterSpacing: "0.1em", fontFamily: "monospace" }}>
                AI consulting · built end-to-end
              </span>
            </div>

            <div
              style={{
                color: "#ffffff",
                fontSize: "76px",
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                display: "flex",
                flexDirection: "column",
                maxWidth: "700px",
              }}
            >
              <span>Automate</span>
              <span>the Grind.</span>
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "21px",
                lineHeight: 1.5,
                maxWidth: "560px",
                display: "flex",
              }}
            >
              Custom RAG systems, agentic AI, and workflow automation for businesses that want AI to actually earn its place.
            </div>
          </div>

          {/* Bottom: domain + service chips */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "24px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "15px", fontFamily: "monospace", letterSpacing: "0.04em" }}>
              tandem-ai.tech
            </span>

            <div style={{ display: "flex", gap: "12px" }}>
              {["RAG Systems", "AI Automation", "Custom Integrations"].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "7px 16px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    display: "flex",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
