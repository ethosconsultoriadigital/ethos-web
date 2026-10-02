export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.ethosconsultoriadigital.com";

export const SITE_NAME = "ETHOS";

export const siteConfig = {
  name: SITE_NAME,
  logo: "/Logo_ethos.png",
  logoAlt: "ETHOS — Consultoría y Estrategia Digital",
  title: "ETHOS | Consultoría y Estrategia Digital",
  description:
    "Estrategia, comunicación y reputación para empresas y organizaciones en México: monitoreo de medios, due diligence, estudios de mercado y software a la medida.",
  keywords: [
    "monitoreo de medios",
    "reputación corporativa",
    "inteligencia regulatoria",
    "due diligence",
    "estudios de mercado",
    "prospección B2B",
    "desarrollo de software a la medida",
    "consultoría estratégica",
    "Guadalajara",
    "México",
  ],
  locale: "es_MX",
  url: SITE_URL,
} as const;

export const brandColors = {
  navy: "#0F172A",
  navyLight: "#1E293B",
  gold: "#C9A96E",
  white: "#F8FAFC",
  muted: "#94A3B8",
} as const;
