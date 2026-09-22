import type { SiteImageKey } from "@/lib/site-images";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Eye,
  Radar,
  Radio,
  Shield,
  ShieldAlert,
} from "lucide-react";

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const valuePropositions = [
  {
    visual: "precision" as SiteImageKey,
    title: "Precisión en el monitoreo",
    description:
      "Configuramos temas, marcas y fuentes de interés para cada cliente y conservamos el origen de cada resultado.",
  },
  {
    visual: "discretion" as SiteImageKey,
    title: "Confidencialidad operativa",
    description:
      "Protegemos la información y configuración de cada cuenta mediante accesos y procesos controlados.",
  },
  {
    visual: "response" as SiteImageKey,
    title: "Alertas oportunas",
    description:
      "Notificamos a los usuarios autorizados cuando existe información disponible para su consulta.",
  },
] as const;

export type ServiceItem = {
  icon: LucideIcon;
  visual: SiteImageKey;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: Shield,
    visual: "shield",
    title: "Protección de reputación",
    description:
      "Seguimiento de menciones públicas y análisis de temas que pueden afectar la reputación de una empresa o marca.",
  },
  {
    icon: Radar,
    visual: "megaphone",
    title: "Monitoreo de medios",
    description:
      "Seguimiento de publicaciones en medios y fuentes digitales conforme a los criterios configurados por cada cliente.",
  },
  {
    icon: ShieldAlert,
    visual: "crisis",
    title: "Alertas de riesgo reputacional",
    description:
      "Identificación y notificación oportuna de información que requiere revisión por parte del cliente.",
  },
  {
    icon: Radio,
    visual: "listening",
    title: "Análisis de conversación digital",
    description:
      "Organización y clasificación de menciones públicas para facilitar su interpretación y seguimiento.",
  },
  {
    icon: Bot,
    visual: "automation",
    title: "Automatización digital",
    description:
      "Flujos automatizados para distribuir alertas y reportes únicamente a usuarios autorizados y con consentimiento.",
  },
  {
    icon: Eye,
    visual: "security",
    title: "Ciberseguridad y datos",
    description:
      "Asesoría en protección de información sensible y mitigación de vulnerabilidades reputacionales vinculadas a datos.",
  },
];

export const useCases = [
  {
    visual: "government" as SiteImageKey,
    title: "Empresas y marcas",
    description:
      "Monitoreo de menciones, cobertura y temas relacionados con la reputación corporativa.",
  },
  {
    visual: "campaign" as SiteImageKey,
    title: "Equipos de comunicación",
    description:
      "Alertas y reportes para revisar información relevante y coordinar respuestas internas.",
  },
  {
    visual: "institution" as SiteImageKey,
    title: "Agencias y consultoras",
    description:
      "Espacios de monitoreo separados para administrar los criterios y entregables de cada cliente.",
  },
  {
    visual: "profile" as SiteImageKey,
    title: "Directivos y voceros corporativos",
    description:
      "Seguimiento de menciones públicas y contexto mediático para proteger la reputación profesional.",
  },
] as const;

export type PortfolioWork = {
  slug: string;
  title: string;
  client: string;
  year: number;
  summary: string;
  services: string[];
  visual?: SiteImageKey;
  featured?: boolean;
};

export const portfolioWorks: PortfolioWork[] = [];

export function getFeaturedPortfolioWorks(limit = 3) {
  const featured = portfolioWorks.filter((work) => work.featured);

  return (featured.length > 0 ? featured : portfolioWorks).slice(0, limit);
}

export const whyEthos = [
  {
    title: "Credibilidad como principio",
    description:
      "ETHOS — del griego «carácter» — es uno de los pilares de la persuasión aristotélica. No vendemos creatividad: construimos legitimidad.",
  },
  {
    title: "Operación desde Guadalajara",
    description:
      "Presencia estratégica en el occidente de México con alcance nacional. Conocemos el contexto institucional y empresarial local.",
  },
  {
    title: "Enfoque de firma, no de agencia",
    description:
      "Equipos senior, relación directa con decisiones y metodología de consultoría — no soluciones genéricas ni volumen sin criterio.",
  },
] as const;
