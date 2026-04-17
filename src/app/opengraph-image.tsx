import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f6fbff",
          backgroundImage:
            "linear-gradient(135deg, #0b4a76 0%, #0f77a7 45%, #1692bd 75%, #25b1ce 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ffd0a7",
            }}
          >
            Senior Full-Stack Engineer · Remote US
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            React + Power BI dashboards that ship in 6 weeks — for US teams
            drowning in enterprise data.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 40, fontWeight: 600 }}>
              {siteConfig.name}
            </div>
            <div style={{ color: "#c6edff", fontSize: 26 }}>
              5+ years · React · Node.js · TypeScript · Power BI
            </div>
          </div>
          <div style={{ color: "#ffd0a7", fontSize: 26 }}>
            {siteConfig.availabilitySlot}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
