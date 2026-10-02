/**
 * Casos / trabajos aprobados por Dirección.
 * Mientras esté vacío, la sección Trabajos del inicio muestra el bloque actual (estado vacío).
 */
export type CaseItem = {
  slug: string;
  title: string;
  client: string;
  year: number;
  summary: string;
  services: string[];
  image?: string;
  featured?: boolean;
};

export const cases: CaseItem[] = [];
