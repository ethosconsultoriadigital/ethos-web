import type { SiteImageKey } from "@/lib/site-images";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Eye,
  Megaphone,
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
    title: "Precisión estratégica",
    description:
      "Diagnóstico riguroso y planes de acción medibles para proteger la credibilidad institucional en entornos digitales complejos.",
  },
  {
    visual: "discretion" as SiteImageKey,
    title: "Discreción operativa",
    description:
      "Protocolos confidenciales y ejecución silenciosa. Su reputación se gestiona con el mismo rigor que un asunto de estado.",
  },
  {
    visual: "response" as SiteImageKey,
    title: "Respuesta en tiempo crítico",
    description:
      "Estructuras de contención activadas en horas, no días. Cuando la narrativa se acelera, ETHOS ya está en posición.",
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
      "Monitoreo, análisis de riesgo narrativo y blindaje preventivo de la imagen digital e institucional.",
  },
  {
    icon: Megaphone,
    visual: "megaphone",
    title: "Colocación táctica de contenido",
    description:
      "Posicionamiento estratégico en medios y plataformas con mensajes calibrados para audiencias de alto impacto.",
  },
  {
    icon: ShieldAlert,
    visual: "crisis",
    title: "Contención de crisis",
    description:
      "Protocolos de respuesta inmediata, gestión de vocerías y control de daños en escenarios de alta exposición.",
  },
  {
    icon: Radio,
    visual: "listening",
    title: "Social listening institucional",
    description:
      "Inteligencia en tiempo real sobre conversaciones, actores y tendencias que afectan su posicionamiento.",
  },
  {
    icon: Bot,
    visual: "automation",
    title: "Automatización digital",
    description:
      "Bots de atención, flujos institucionales y herramientas que escalan la presencia sin perder control del mensaje.",
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
    title: "Gobiernos entrantes",
    description:
      "Construcción de narrativa de llegada, alineación de vocerías y protección del capital político desde el primer día.",
  },
  {
    visual: "campaign" as SiteImageKey,
    title: "Campañas políticas",
    description:
      "Estrategia digital integral, contranarrativa y gestión de riesgos en ciclos electorales de alta tensión mediática.",
  },
  {
    visual: "institution" as SiteImageKey,
    title: "Instituciones públicas y privadas",
    description:
      "Fortalecimiento de confianza institucional, protocolos de comunicación y respuesta coordinada ante escrutinio público.",
  },
  {
    visual: "profile" as SiteImageKey,
    title: "Figuras de alto perfil",
    description:
      "Gestión discreta de reputación personal, prevención de crisis y posicionamiento en entornos mediáticos hostiles.",
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
      "Presencia estratégica en el occidente de México con alcance nacional. Conocemos el contexto institucional y político local.",
  },
  {
    title: "Enfoque de firma, no de agencia",
    description:
      "Equipos senior, relación directa con decisiones y metodología de consultoría — no campañas genéricas ni volumen sin criterio.",
  },
] as const;
