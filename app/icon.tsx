import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0b0f",
          borderRadius: 16,
          color: "#f3f0f7",
          fontSize: 50,
          fontWeight: 700,
          letterSpacing: -3,
          paddingBottom: 8,
        }}
      >
        a<span style={{ color: "#b393fb" }}>.</span>
      </div>
    ),
    size,
  );
}
