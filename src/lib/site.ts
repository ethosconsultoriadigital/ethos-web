export const siteConfig = {
  name: "ETHOS",
  logo: "/Logo_ethos.png",
  logoAlt: "ETHOS — Consultoría y Estrategia Digital",
  title: "ETHOS | Consultoría y Estrategia Digital",
  description:
    "Servicio B2B de monitoreo de medios, análisis de reputación y alertas informativas para empresas y usuarios autorizados.",
  keywords: [
    "monitoreo de medios",
    "análisis de reputación",
    "alertas informativas",
    "reputación corporativa",
    "inteligencia de medios",
    "Guadalajara",
    "México",
    "empresas",
    "B2B",
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
