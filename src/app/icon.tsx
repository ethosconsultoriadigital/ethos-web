import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/logo-image";
import { brandColors } from "@/lib/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={80}
          height={32}
          style={{ objectFit: "cover", objectPosition: "left center" }}
        />
      </div>
    ),
    { ...size }
  );
}
