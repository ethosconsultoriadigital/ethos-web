import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/logo-image";
import { brandColors } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandColors.navy,
          padding: 16,
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={320}
          height={128}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
