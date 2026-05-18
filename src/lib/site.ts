export const siteConfig = {
  name: "ETHOS",
  logo: "/Logo_ethos.png",
  logoAlt: "ETHOS — Consultoría y Estrategia Digital",
  title: "ETHOS | Consultoría y Estrategia Digital",
  description:
    "Firma especializada en protección de reputación digital, colocación estratégica de contenido y automatización institucional para gobiernos, campañas e instituciones en México.",
  keywords: [
    "consultoría digital",
    "estrategia digital",
    "reputación digital",
    "Guadalajara",
    "México",
    "gobierno",
    "campañas políticas",
  ],
  locale: "es_MX",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://ethos.com.mx",
} as const;

export const brandColors = {
  navy: "#0F172A",
  navyLight: "#1E293B",
  gold: "#C9A96E",
  white: "#F8FAFC",
  muted: "#94A3B8",
} as const;
