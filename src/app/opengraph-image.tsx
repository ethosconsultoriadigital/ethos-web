import { ImageResponse } from "next/og";

import { getLogoDataUrl } from "@/lib/logo-image";
import { brandColors, siteConfig } from "@/lib/site";

export const alt = siteConfig.logoAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUrl();
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(145deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)`,
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={440}
          height={440}
          style={{ objectFit: "contain" }}
        />
        <div          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 26,
            fontWeight: 600,
            color: brandColors.white,
          }}
        >
          Consultoría y Estrategia Digital
        </div>
        <div          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 18,
            color: brandColors.muted,
          }}
        >
          {`Guadalajara, México · ${domain}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
