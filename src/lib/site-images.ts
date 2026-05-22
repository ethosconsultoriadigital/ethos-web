/**
 * Imágenes de Unsplash (https://unsplash.com/license)
 * Licencia: uso gratuito, incluido comercial, sin permiso previo.
 */

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`;

export const siteImages = {
  // Reemplazadas — no cargaban con los IDs anteriores
  hero: "/images/arquitectura-corporativa.png",
  megaphone: "/images/colocacion-contenido.png",
  security: unsplash("photo-1563013544-824ae1b704d3", 800),
  government: "/images/gobierno-entrante.png",
  campaign: "/images/campanas-politicas.png",
  profile: unsplash("photo-1560250097-0b93528c311a", 800),
  discretion: unsplash("photo-1517245386807-bb43f82c33c4", 800),

  // Sin cambios — funcionaban correctamente
  shield: unsplash("photo-1563986768609-322da13575f3", 800),
  crisis: unsplash("photo-1454165804606-c3d57bc86b40", 800),
  listening: unsplash("photo-1551288049-bebda4e38f71", 800),
  automation: unsplash("photo-1518770660439-4636190af475", 800),
  institution: unsplash("photo-1497366216548-37526070297c", 800),
  precision: unsplash("photo-1460925895917-afdab827c52f", 800),
  response: unsplash("photo-1504384308090-c894fdcc538d", 800),
  credibility: unsplash("photo-1521791136064-7986c2920216", 800),
} as const;

export type SiteImageKey = keyof typeof siteImages;

export const siteImageAlt: Record<SiteImageKey, string> = {
  hero: "Arquitectura corporativa e institucional",
  shield: "Seguridad y protección de reputación digital",
  megaphone: "Colocación táctica de contenido digital",
  crisis: "Gestión estratégica y contención de crisis",
  listening: "Análisis de datos y monitoreo digital",
  automation: "Tecnología y automatización institucional",
  security: "Ciberseguridad y protección de información",
  government: "Gobiernos entrantes y desarrollo urbano",
  campaign: "Campañas políticas y cobertura mediática",
  institution: "Entorno corporativo e institucional",
  profile: "Reuniones ejecutivas y alto perfil",
  precision: "Precisión analítica y estrategia de datos",
  discretion: "Operación confidencial y discreta",
  response: "Respuesta rápida en entornos críticos",
  credibility: "Credibilidad institucional y confianza",
};
