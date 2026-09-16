import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#111318",
          color: "#E4E6EB",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#3B82F6" }}>{"<"}</span>
          <span style={{ color: "#84CC16" }}>/</span>
          <span style={{ color: "#3B82F6" }}>{">"}</span>
          <span>Device Watch UK</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "#9AA0AE",
            maxWidth: 900,
          }}
        >
          Vape hardware, compared properly.
        </div>
      </div>
    ),
    { ...size },
  );
}
