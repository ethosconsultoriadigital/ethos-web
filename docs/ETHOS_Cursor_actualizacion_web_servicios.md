# ETHOS — Instrucciones para Cursor: actualización del sitio con el catálogo completo de 10 servicios

**Versión 2 · 2 de octubre de 2026.** Incluye el servicio 10 (Desarrollo de software a la medida) y está ajustada a lo que muestra hoy el sitio en producción.

## Cómo usarlo (3 pasos)

**Paso 1.** Guarda este archivo en tu proyecto como `docs/cursor/ETHOS_actualizacion_servicios.md`.
**Paso 2.** Abre el chat de Cursor en modo **Agent** y pega este mensaje:

```text
Lee completo docs/cursor/ETHOS_actualizacion_servicios.md. Es la especificación para actualizar el sitio con los 10 servicios de ETHOS.

Reglas: trabaja en la rama feature/catalogo-servicios, no borres ni rompas nada existente, sigue los patrones del repo y haz un commit por fase.

Empieza SOLO con la Fase 0: dame el diagnóstico y espera mi aprobación. Después avanza una fase a la vez; al terminar cada una, corre lint y build, muéstrame qué archivos cambiaste y espera mi "continúa" antes de pasar a la siguiente.
```

**Paso 3.** Cada vez que Cursor termine una fase, revisa el resumen y responde **"continúa con la Fase X"**. Al final, revisa el checklist de la Fase 9 antes de publicar.

---

## 0. Contexto del proyecto (para el agente)

- Sitio: `https://www.ethosconsultoriadigital.com` — ETHOS | Consultoría y Estrategia Digital, con sede en Guadalajara, Jalisco, México.
- Stack detectado desde producción: **Next.js** (imágenes servidas por `/_next/image`, metadatos tipo `generateMetadata`). Confirma en el repo si es App Router (`app/`) o Pages Router (`pages/`) y **sigue el patrón existente**.
- Rutas actuales: `/`, `/servicios`, `/trabajos`, `/nosotros`, `/contacto`, `/aviso-de-privacidad`.
- Objetivo: mostrar los **10 servicios** del portafolio, con una página propia por servicio, a la que llevarán los anuncios de Meta.
- Idioma del sitio: español de México, trato de **usted**.

### Estado verificado en producción (2 de octubre de 2026)
| Punto | Estado hoy | Acción |
|---|---|---|
| `canonical` y `og:url` globales | Ya apuntan a `https://www.ethosconsultoriadigital.com` | Mantener |
| Imágenes Open Graph y Twitter | Ya se sirven desde el dominio propio | Mantener |
| Canonical por página | `/servicios` usa el canonical del inicio | **Corregir** (Fase 1) |
| Imágenes `campanas-politicas.png` y `gobierno-entrante.png` | Siguen en "Casos de uso" del inicio | **Renombrar** (Fase 1) |
| Meta descripción del inicio | Solo menciona monitoreo | **Actualizar** (Fase 1) |
| Meta descripción de `/servicios` | Menciona los 6 servicios actuales, incluida ciberseguridad | **Actualizar** (Fase 1) |
| `/servicios` | 6 tarjetas: Protección de reputación, Monitoreo de medios, Alertas de riesgo reputacional, Análisis de conversación digital, Automatización digital, Ciberseguridad y datos | **Reemplazar por los 10 servicios** (Fase 3) |
| Inicio, sección "Servicios" | Las mismas 6 tarjetas | **Actualizar** (Fase 5) |
| Imágenes de tarjetas | Mezcla de imágenes locales (`/images/...`) y de `images.unsplash.com` | Reutilizar las mismas URLs (ver Fase 3) |
| Pie de página | Lema "Monitoreo de medios · Reputación corporativa" | **Actualizar** (Fase 7) |

---

## 1. Reglas que no se pueden romper

1. **No romper nada existente.** No borres rutas, componentes, estilos, imágenes, textos legales ni el formulario de contacto. Todo cambio debe ser aditivo o una sustitución puntual descrita aquí.
2. **Reutiliza el sistema visual actual:** componentes, tipografías, colores, espaciados y clases (Tailwind, CSS Modules o lo que use el repo). No introduzcas librerías de UI nuevas. Solo agrega una dependencia si es estrictamente necesaria, y pregunta antes de hacerlo.
3. **Cero dinero.** Ningún texto, metadato, JSON-LD ni atributo puede incluir precios, rangos, "desde", "$", "MXN", "IVA", "descuentos", "tarifas", "presupuesto", "margen" ni "precio de introducción". Las propuestas se presentan en consulta confidencial.
4. **Cero nombres de clientes.** No agregues marcas, empresas ni personas atendidas.
5. **Sector-neutral.** No uses las palabras "político", "campaña política", "candidato", "precandidatura", "alcaldía", "gobierno entrante", "electoral" ni "diputado", ni en textos, ni en nombres de archivo, ni en `alt`, ni en slugs.
6. **Transparencia y cumplimiento.** El sitio es la página de destino de los anuncios, y Meta revisa juntos el anuncio y la página: los textos deben coincidir con los flyers. No uses "vigilancia" para describir servicios (usa "seguimiento"), no prometas resultados garantizados ni tiempos absolutos ("inmediato", "100%", "todos los medios"), y no uses testimonios ni cifras que no estén aprobados por escrito.
7. **Divulgación de IA.** Donde se describa la herramienta de automatización, debe decir que usa inteligencia artificial con revisión humana.
8. **Trabajo en rama nueva:** `feature/catalogo-servicios`. Haz un commit por fase, con mensaje descriptivo.
9. Al terminar cada fase: ejecuta `npm run lint` y `npm run build` (o sus equivalentes en el repo) y corrige los errores antes de continuar.
10. Si algo de este documento choca con cómo está construido el repo, **detente y pregunta**. No improvises estructura.

---

## Fase 0 — Diagnóstico (sin modificar archivos)

Entrega un reporte breve con:

- [ ] Router usado (App o Pages) y ubicación de las páginas `/` y `/servicios`.
- [ ] Dónde se definen los metadatos globales (`layout.tsx`, `metadata`, `generateMetadata`, `next-seo`, `_document`, etc.).
- [ ] Dónde se definen `metadataBase`, `canonical` y `og:url`, y por qué `/servicios` hereda el canonical del inicio. Confirma que no queda ninguna referencia a `ethos.com.mx`.
- [ ] Dónde están configuradas las imágenes remotas (`images.remotePatterns` o `images.domains` en `next.config`).
- [ ] Dónde se usan `campanas-politicas.png` y `gobierno-entrante.png` (código y `/public`).
- [ ] Cómo están construidas hoy las tarjetas de servicios (componente, archivo de datos o JSX directo).
- [ ] Si existen `sitemap.ts` / `sitemap.xml` y `robots.ts` / `robots.txt`.
- [ ] Cómo funciona el formulario de `/contacto` (a qué endpoint envía y qué campos tiene).
- [ ] Si ya hay algún script de analítica o de píxel.

**No continúes a la Fase 1 hasta que el usuario apruebe el diagnóstico.**

---

## Fase 1 — Correcciones urgentes de SEO y marca

### 1.1 Canonical propio en cada página
El dominio global ya es correcto. El problema es que `/servicios` (y probablemente las demás páginas) declaran como canonical la portada, y Google puede ignorarlas. Cada página debe declarar su propia URL:

- Define una constante única, por ejemplo en `lib/site.ts`:
  ```ts
  export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ethosconsultoriadigital.com";
  export const SITE_NAME = "ETHOS";
  ```
- En el layout raíz: `metadataBase: new URL(SITE_URL)`.
- En cada página: `alternates: { canonical: "/ruta-de-la-pagina" }`. Cada página debe tener **su propio** canonical, no el del inicio.
- Asegura que `og:url` coincida con el canonical de cada página.
- Verifica que las imágenes Open Graph y Twitter se generen y sirvan desde el dominio propio.
- Agrega `NEXT_PUBLIC_SITE_URL=https://www.ethosconsultoriadigital.com` a `.env.example`. No modifiques `.env` reales.

### 1.2 Renombrar imágenes con nombres sensibles
| Actual | Nuevo |
|---|---|
| `/public/images/campanas-politicas.png` | `/public/images/equipos-comunicacion.png` |
| `/public/images/gobierno-entrante.png` | `/public/images/empresas-marcas.png` |

- Usa `git mv` para conservar el historial.
- Actualiza todas las referencias. Luego busca en todo el repo `campanas-politicas` y `gobierno-entrante`: deben quedar **cero** resultados.
- No cambies la imagen en sí, solo el nombre.

### 1.3 Meta descripción global
**Inicio y global.** Sustituye la descripción actual ("Servicio B2B de monitoreo de medios, análisis de reputación y alertas informativas…") por:

> Estrategia, comunicación y reputación para empresas y organizaciones en México: monitoreo de medios, due diligence, estudios de mercado y software a la medida.

**Página `/servicios`.** Sustituye la descripción actual ("Servicios de monitoreo de medios, protección de reputación, alertas, análisis de conversación digital, automatización y ciberseguridad.") por:

> Diez servicios de estrategia, comunicación, investigación y desarrollo digital para empresas y organizaciones en México. Consulta confidencial.

Aplica cada una en `description`, `openGraph.description` y `twitter.description` de su página.

Actualiza también `keywords` (si se usan) con: `monitoreo de medios, reputación corporativa, inteligencia regulatoria, due diligence, estudios de mercado, prospección B2B, desarrollo de software a la medida, consultoría estratégica, Guadalajara, México`.

**Commit:** `fix(seo): canonical por página, descripciones y nombres de imágenes neutrales`

---

## Fase 2 — Fuente única de datos de servicios

Crea **un solo archivo** con los 10 servicios, por ejemplo `data/services.ts` (o `lib/services.ts`, según la convención del repo). Todas las páginas y tarjetas deben leer de ahí.

### 2.1 Tipo
```ts
export type ServiceGroup = "continuo" | "proyecto";

export interface ServiceFAQ { q: string; a: string; }

export interface Service {
  number: string;          // "01"
  slug: string;            // ruta bajo /servicios/
  name: string;            // H1
  group: ServiceGroup;
  badge: string;           // etiqueta visible
  hook: string;            // subtítulo / gancho
  problem: string;         // 2 frases
  benefits: string[];      // exactamente 4
  audience: string;        // "Para quién"
  faqs: ServiceFAQ[];      // 3
  seoTitle: string;        // <= 60 caracteres
  seoDescription: string;  // <= 155 caracteres
  whatsappText: string;    // mensaje prellenado
  image?: string;          // opcional: reutiliza imágenes existentes del sitio
}
```

### 2.2 Contenido (copiar tal cual)

La respuesta estándar a la pregunta de costo, que se reutiliza en todos los servicios, es: **"Cada propuesta se elabora a la medida de su alcance y objetivos. La presentamos en una consulta confidencial, sin compromiso."**

---

#### 01 · Monitoreo de medios y reputación
- **slug:** `monitoreo-de-medios`
- **group:** `continuo` · **badge:** `Servicio continuo`
- **hook:** Sepa cada mañana qué se publica sobre su marca, en qué tono y con qué riesgo.
- **problem:** Una nota negativa que se detecta tarde se convierte en crisis. La mayoría de las empresas se entera por un tercero, cuando la información ya circuló.
- **benefits:**
  1. Seguimiento de medios nacionales y digitales, todo el día, con los temas que usted defina.
  2. Resumen ejecutivo en su correo a las 6:00 a. m., con el riesgo señalado.
  3. Alerta por WhatsApp cuando surge una nota relevante, solo a los contactos que usted autorice.
  4. Reportes semanales y mensuales, con comparativo frente a los competidores que usted elija.
- **audience:** Empresas, marcas y equipos de comunicación.
- **faqs:**
  - ¿Qué medios cubren? — Medios nacionales, regionales y digitales, configurados según los temas y palabras clave de cada cliente.
  - ¿Cómo recibo la información? — Por correo cada mañana, con alertas por WhatsApp a los contactos que usted autorice y reportes periódicos. Cualquier destinatario puede darse de baja en todo momento.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Monitoreo de medios y reputación en México | ETHOS
- **seoDescription:** Seguimiento de medios con resumen diario a las 6 a. m. y alertas por WhatsApp para empresas en México. Consulta confidencial.
- **whatsappText:** Hola, me interesa el servicio de Monitoreo de medios y reputación.

#### 02 · Inteligencia regulatoria
- **slug:** `inteligencia-regulatoria`
- **group:** `continuo` · **badge:** `Servicio continuo`
- **hook:** Entérese a tiempo de los cambios normativos que tocan a su industria.
- **problem:** Las normas estatales y municipales cambian sin aviso, y el DOF por sí solo no alcanza. Enterarse tarde significa reaccionar con prisa o incumplir.
- **benefits:**
  1. Revisión en días hábiles del DOF y de los periódicos oficiales de las entidades que usted elija.
  2. Tres cortes al día, incluida la lectura de documentos escaneados.
  3. Aviso de propuestas normativas en discusión relacionadas con su sector.
  4. Lectura de impacto para su equipo jurídico: qué le aplica y a qué dar seguimiento.
- **audience:** Áreas jurídicas, de cumplimiento y de asuntos corporativos.
- **faqs:**
  - ¿Qué publicaciones oficiales cubren? — El DOF y los periódicos oficiales de entidades como Jalisco, Ciudad de México y Nuevo León, además de gacetas legislativas.
  - ¿Sustituye la asesoría legal? — No. Cada aviso incluye una lectura de impacto para que su equipo jurídico decida; no constituye opinión legal.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Monitoreo DOF y normativa estatal | ETHOS
- **seoDescription:** Revisión en días hábiles del DOF y periódicos oficiales estatales, con lectura de impacto para su equipo jurídico.
- **whatsappText:** Hola, me interesa el servicio de Inteligencia regulatoria.

#### 03 · Monitoreo de entorno operativo
- **slug:** `entorno-operativo`
- **group:** `continuo` · **badge:** `Servicio continuo`
- **hook:** Conozca a tiempo lo que se publica sobre su planta, obra o centro de operación.
- **problem:** Los temas de convivencia con el entorno suelen aparecer primero en medios locales y fuentes públicas. Conocerlos a tiempo permite atenderlos con diálogo antes de que afecten la operación.
- **benefits:**
  1. Seguimiento de lo que se publica en medios locales y fuentes públicas sobre su sitio.
  2. Temas de convivencia con el entorno: movilidad, ruido y operación diaria.
  3. Reporte con nivel de riesgo reputacional y seguimiento diario.
  4. Portal propio para administrar temas y destinatarios.
- **audience:** Industria, construcción, manufactura y operación en sitio.
- **faqs:**
  - ¿Para qué tipo de sitios funciona? — Plantas, obras, centros de distribución y cualquier operación con impacto en su entorno inmediato.
  - ¿Qué fuentes usan? — Solo información publicada en fuentes públicas. Los reportes son agregados: no se elaboran perfiles de personas.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Monitoreo de entorno para plantas y obras | ETHOS
- **seoDescription:** Conozca lo que se publica sobre su planta u obra en medios locales y fuentes públicas, con nivel de riesgo y seguimiento diario.
- **whatsappText:** Hola, me interesa el servicio de Monitoreo de entorno operativo.

#### 04 · Automatización de redes sociales
- **slug:** `automatizacion-de-redes`
- **group:** `continuo` · **badge:** `Acceso anticipado · Beta`
- **hook:** Su calendario, textos y piezas del mes, listos para aprobar.
- **problem:** Las herramientas tradicionales solo programan lo que usted ya escribió. Crear el contenido de cada mes sigue consumiendo horas de su equipo.
- **benefits:**
  1. Propone el calendario, los textos y los guiones del mes con apoyo de inteligencia artificial.
  2. Arma las piezas sobre sus propias plantillas en Canva.
  3. Programa, publica y da seguimiento a los comentarios en las redes conectadas.
  4. Nada se publica sin la revisión y aprobación de su equipo.
- **audience:** Agencias, equipos de marketing y marcas con varias cuentas.
- **faqs:**
  - ¿En qué redes publica? — Hoy opera en Facebook, Instagram y X; otras redes se integran de forma progresiva. Es una versión beta en acceso anticipado.
  - ¿Usa inteligencia artificial? — Sí, para proponer textos y piezas. Todo contenido pasa por la revisión y aprobación de su equipo antes de publicarse.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Automatización de contenido para redes | ETHOS
- **seoDescription:** Calendario, textos y piezas del mes generados sobre sus plantillas de Canva, con aprobación humana antes de publicar. Acceso anticipado.
- **whatsappText:** Hola, me interesa el acceso anticipado a la Automatización de redes sociales.

#### 05 · Due diligence e investigación
- **slug:** `due-diligence`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** Antes de firmar, invertir o contratar: conozca a su contraparte.
- **problem:** Firmar con una contraparte que no se revisó a fondo puede costar más que el propio contrato. La información existe, pero hay que encontrarla y conectarla.
- **benefits:**
  1. Revisión de antecedentes en prensa, registros y fuentes públicas.
  2. Análisis corporativo: estructura, empresas vinculadas y litigios públicos.
  3. Matriz de riesgo con cada fuente documentada.
  4. Investigación de grupos de empresas conectadas en un solo mapa.
- **audience:** Direcciones generales, jurídicas, de compras e inversión.
- **faqs:**
  - ¿Qué fuentes utilizan? — Solo fuentes públicas y registros de acceso público, con anexo de fuentes en cada reporte. El servicio no incluye cruce con listas internacionales de sanciones.
  - ¿Cuánto tarda? — Depende del alcance; se define con fecha cerrada en la propuesta.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Due diligence empresarial en México | ETHOS
- **seoDescription:** Investigación de contrapartes antes de firmar o invertir: estructura corporativa, litigios, prensa y matriz de riesgo documentada.
- **whatsappText:** Hola, me interesa el servicio de Due diligence e investigación.

#### 06 · Radiografía estratégica digital
- **slug:** `radiografia-digital`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** Dónde está parada su marca o su liderazgo en digital, y qué hacer en los próximos 90 días.
- **problem:** Tener presencia digital no es lo mismo que tener reputación. Sin un diagnóstico claro, cada publicación es una apuesta.
- **benefits:**
  1. Índice de desempeño digital y análisis red por red.
  2. Conversación pública, narrativas, tono y riesgos detectados.
  3. Comparativo frente a sus referentes del sector.
  4. Plan por etapas a 90 días y protocolo básico de crisis.
- **audience:** Directivos, voceros, marcas personales y organizaciones.
- **faqs:**
  - ¿Qué incluye el plan? — Acciones en tres etapas (0–15, 16–45 y 46–90 días) y un protocolo básico de crisis.
  - ¿Se puede hacer de una sola red? — Sí, el alcance se ajusta a sus necesidades.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Diagnóstico de reputación digital | ETHOS
- **seoDescription:** Radiografía de su presencia digital: desempeño por red, tono, riesgos y plan de acción a 90 días para marcas y líderes.
- **whatsappText:** Hola, me interesa la Radiografía estratégica digital.

#### 07 · Estudios de mercado
- **slug:** `estudios-de-mercado`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** Decida si un producto o una plaza valen la inversión, con información en días hábiles.
- **problem:** Abrir una plaza o lanzar un producto sin datos es decidir a ciegas. Los estudios tradicionales tardan meses en entregarse.
- **benefits:**
  1. Dimensionamiento del mercado, perfil del consumidor y canales.
  2. Análisis de la competencia y de su posicionamiento.
  3. FODA y plan de acción a 30, 60 y 90 días.
  4. Estudio de gabinete con fuentes documentadas; trabajo de campo opcional.
- **audience:** Empresas en expansión, emprendedores e inversionistas.
- **faqs:**
  - ¿Incluye trabajo de campo? — El estudio es de gabinete, con fuentes documentales. El trabajo de campo es opcional y se define por separado.
  - ¿Qué entregan? — Un documento por capítulos con mercado, consumidor, canales, competencia, FODA y plan de acción.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Estudios de mercado en Guadalajara y México | ETHOS
- **seoDescription:** Estudios de mercado de gabinete con tamaño de mercado, consumidor, competencia, FODA y plan a 90 días, entregados en días hábiles.
- **whatsappText:** Hola, me interesa un Estudio de mercado.

#### 08 · Mapa de mercado B2B
- **slug:** `mapa-de-mercado-b2b`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** No es una base de datos: es investigación aplicada a su prospección.
- **problem:** Las bases de datos genéricas llenan el CRM de registros que nadie contacta. Su equipo comercial necesita saber a quién buscar primero y por qué.
- **benefits:**
  1. Universo de empresas por giro, canal, municipio y zona, sin duplicados.
  2. Nivel de ajuste con su cliente ideal y prioridad de acercamiento.
  3. Notas comerciales y fuentes verificables por empresa.
  4. Información de empresas, no bases de datos personales.
- **audience:** Equipos comerciales, distribuidores y empresas B2B.
- **faqs:**
  - ¿En qué se diferencia de comprar una base? — Cada empresa se investiga y se califica según su cliente ideal, con motivo y prioridad de acercamiento. No se venden datos personales.
  - ¿Qué zonas cubren? — Cualquier zona de México, definida por giro, canal y municipio.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Prospección B2B calificada | ETHOS
- **seoDescription:** Mapa de mercado B2B: empresas investigadas y calificadas por ajuste, con prioridad de acercamiento y fuentes verificables.
- **whatsappText:** Hola, me interesa el Mapa de mercado B2B.

#### 09 · Valuación de activos publicitarios
- **slug:** `valuacion-de-activos-publicitarios`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** Convierta un activo urbano en un medio con valor comercial.
- **problem:** Parabuses, puentes o sistemas de bicicleta tienen audiencia, pero rara vez un valor comercial medido. Sin él, no se puede negociar con anunciantes.
- **benefits:**
  1. Perfil demográfico agregado de la zona y del flujo de personas.
  2. Inventario convertido en unidades medibles de exposición.
  3. Paquetes comerciales y escenarios de aprovechamiento.
  4. Modelo listo para presentar a anunciantes y socios.
- **audience:** Operadores de mobiliario urbano, desarrolladores y dueños de espacios.
- **faqs:**
  - ¿Qué tipo de activos valúan? — Mobiliario urbano, espacios en inmuebles, puentes, sistemas de movilidad y otros espacios con exposición.
  - ¿Qué recibo al final? — Un modelo de monetización con inventario medido y paquetes comerciales.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Valuación de espacios publicitarios | ETHOS
- **seoDescription:** Convertimos activos urbanos en medios con valor comercial: perfil de audiencia, unidades de exposición y modelo de monetización.
- **whatsappText:** Hola, me interesa la Valuación de activos publicitarios.

#### 10 · Desarrollo de software a la medida
- **slug:** `desarrollo-de-software`
- **group:** `proyecto` · **badge:** `Por proyecto`
- **hook:** Herramientas digitales hechas para su operación, con acompañamiento uno a uno.
- **problem:** Las herramientas genéricas obligan a su equipo a adaptarse al software, y no al revés. Los procesos manuales y los sistemas desconectados consumen tiempo que su operación necesita.
- **benefits:**
  1. Diagnóstico de sus procesos y definición conjunta del alcance.
  2. Plataformas web, automatizaciones e integraciones hechas a la medida.
  3. Asesoría personalizada, uno a uno, durante todo el proyecto.
  4. Entregas por etapas, con documentación y capacitación para su equipo.
- **audience:** Empresas y organizaciones que necesitan digitalizar sus procesos.
- **faqs:**
  - ¿Qué tipo de software desarrollan? — Plataformas web, paneles internos, automatizaciones e integraciones entre sistemas, según lo que defina el diagnóstico.
  - ¿Cómo funciona la asesoría uno a uno? — Un responsable da seguimiento directo a su proyecto, con sesiones periódicas y entregas por etapas que usted revisa y aprueba.
  - ¿Cuánto cuesta? — *(respuesta estándar)*
- **seoTitle:** Desarrollo de software a la medida en México | ETHOS
- **seoDescription:** Plataformas web, automatizaciones e integraciones a la medida, con asesoría personalizada uno a uno y entregas por etapas.
- **whatsappText:** Hola, me interesa el servicio de Desarrollo de software a la medida.

**Commit:** `feat(data): catálogo único de 10 servicios`

---

## Fase 3 — Página `/servicios` (catálogo)

Modifica la página existente **conservando** su encabezado, su estilo y el CTA "Solicitar propuesta".

- Título: **Servicios de estrategia, comunicación y reputación** (reemplaza a "Servicios de monitoreo e inteligencia de medios").
- Subtítulo: *Cada servicio se diseña a la medida de los objetivos, el perfil de riesgo y el contexto de su empresa u organización.*
- Dos secciones, agrupadas por `group`:
  - **Servicios continuos**: 01, 02, 03, 04.
  - **Servicios por proyecto**: 05, 06, 07, 08, 09, 10.
- Cada tarjeta muestra: número, `badge`, `name`, `hook` y el enlace "Conocer el servicio →" hacia `/servicios/{slug}`.
- Reutiliza el componente de tarjeta actual. Si no existe, crea `components/ServiceCard.tsx` con el mismo estilo que las tarjetas actuales.
- Imágenes: usa **exactamente** estas URLs, que ya se usan hoy en el sitio (no agregues imágenes nuevas sin preguntar):

| Servicio | Imagen |
|---|---|
| 01 Monitoreo de medios | `/images/colocacion-contenido.png` |
| 02 Inteligencia regulatoria | `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 03 Entorno operativo | `/images/arquitectura-corporativa.png` |
| 04 Automatización de redes | `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 05 Due diligence | `https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 06 Radiografía digital | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 07 Estudios de mercado | `https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 08 Mapa de mercado B2B | `https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 09 Valuación de activos | `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |
| 10 Software a la medida | `https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80` |

  Cada imagen lleva como `alt` el nombre del servicio.

### Qué hacer con las 6 tarjetas actuales
| Tarjeta actual | Acción |
|---|---|
| Protección de reputación | Integrar en 01 (no mostrar como tarjeta aparte) |
| Monitoreo de medios | Pasa a ser 01 |
| Alertas de riesgo reputacional | Integrar en 01 |
| Análisis de conversación digital | Integrar en 01 y 06 |
| Automatización digital | Pasa a ser 04 |
| Ciberseguridad y datos | **No borrar.** Muévela a una bandera `SHOW_CYBERSECURITY = true` (sigue visible como tarjeta aparte al final del catálogo, con su texto actual) y deja `// TODO: confirmar con Dirección si se mantiene`. Al poner la bandera en `false` debe desaparecer sin romper nada. |

Si alguna de estas tarjetas tiene un ancla (`#monitoreo`, etc.) usada en otra parte del sitio, conserva el ancla o agrega una redirección hacia la nueva página.

**Commit:** `feat(servicios): catálogo agrupado con 10 servicios`

---

## Fase 4 — Páginas individuales `/servicios/[slug]`

Crea una ruta dinámica:
- App Router: `app/servicios/[slug]/page.tsx`, con `generateStaticParams` y `generateMetadata`.
- Pages Router: `pages/servicios/[slug].tsx`, con `getStaticPaths` y `getStaticProps`.
- Slug inexistente → `notFound()` (o `404`).

### Estructura de la página (en este orden)
1. **Hero:** `badge` pequeño, H1 = `name`, subtítulo = `hook`, y dos botones: **Solicitar propuesta** (hacia `/contacto?servicio={slug}`) y **Escribir por WhatsApp**.
2. **El reto:** `problem`.
3. **Qué recibe:** los 4 `benefits`, numerados 01–04.
4. **Cómo trabajamos:** tres pasos fijos, iguales para todos los servicios:
   1. *Consulta confidencial* — Entendemos su contexto, riesgos y objetivos.
   2. *Propuesta a la medida* — Alcance, entregables y tiempos definidos.
   3. *Arranque o entrega* — Operación continua o proyecto con fecha cerrada.
5. **Para quién:** `audience`.
6. **Preguntas frecuentes:** acordeón accesible con `<details>`/`<summary>` o el componente que ya exista.
7. **CTA final:** *"Conversemos de forma confidencial sobre su caso."* + botón **Solicitar propuesta**.
8. **Otros servicios:** 3 tarjetas del mismo `group`, excluyendo el actual.

### Metadatos por página
- `title`: `seoTitle` · `description`: `seoDescription`
- `alternates.canonical`: `/servicios/{slug}`
- `openGraph`: `title`, `description`, `url` (el canonical), `locale: "es_MX"`, `type: "website"`

### Datos estructurados (JSON-LD)
En cada página de servicio incluye un `<script type="application/ld+json">` con este contenido. **Sin campos `offers`, `price` ni `priceRange`.**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{name}",
  "description": "{seoDescription}",
  "serviceType": "{name}",
  "areaServed": { "@type": "Country", "name": "México" },
  "provider": {
    "@type": "ProfessionalService",
    "name": "ETHOS | Consultoría y Estrategia Digital",
    "url": "https://www.ethosconsultoriadigital.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Guadalajara", "addressRegion": "Jalisco", "addressCountry": "MX" }
  },
  "url": "https://www.ethosconsultoriadigital.com/servicios/{slug}"
}
```
Agrega también `FAQPage` con las 3 `faqs` del servicio.

**Commit:** `feat(servicios): páginas individuales con SEO y JSON-LD`

---

## Fase 5 — Inicio (`/`)

Cambios **mínimos**. No toques el título del hero, "Propuesta de valor", "Por qué ETHOS" ni "Consulta confidencial".

- **Hero, solo el subtítulo:** cambia "Monitoreo de medios, análisis de reputación y alertas informativas para empresas e instituciones que no pueden permitirse improvisar." por:
  > Estrategia, comunicación, investigación y desarrollo digital para empresas e instituciones que no pueden permitirse improvisar.
- **Sección "Servicios":**
  - Título: *Servicios de estrategia, comunicación y reputación* (reemplaza a "Servicios de monitoreo e inteligencia de medios").
  - Subtítulo: *Diez servicios para proteger su reputación, decidir con datos y digitalizar su operación.*
  - Muestra 6 servicios destacados, en este orden: 01, 05, 07, 10, 02, 06. Cada tarjeta enlaza a su página.
  - Botón "Explorar todos los servicios" hacia `/servicios`.
- **Sección "Casos de uso":** mantén las 4 tarjetas. Solo actualiza las rutas de las imágenes renombradas en la Fase 1.
- **Sección "Trabajos":** no la modifiques. Los casos se publicarán cuando Dirección los apruebe. Deja preparado un arreglo vacío `cases: []` en `data/cases.ts`; si está vacío, se sigue mostrando el bloque actual.
- **JSON-LD `ProfessionalService`** en el layout o en el inicio: nombre, url, logo, dirección (Guadalajara, Jalisco, MX), `areaServed: México`. Sin `priceRange`.

**Commit:** `feat(home): servicios destacados y JSON-LD de empresa`

---

## Fase 6 — Contacto y WhatsApp

### 6.1 Formulario
- Si llega el parámetro `?servicio={slug}`, preselecciona el servicio en el formulario.
- Si el formulario no tiene campo de servicio, agrega un `<select>` opcional **"Servicio de interés"** con los 10 nombres más "Otro / no estoy seguro". No elimines ni renombres los campos existentes y verifica que el endpoint actual siga recibiendo los datos.
- No agregues campos de presupuesto.
- Agrega una casilla obligatoria, sin marcar por defecto: *"Acepto el aviso de privacidad y autorizo que ETHOS me contacte por correo o WhatsApp sobre mi solicitud."*, con enlace a `/aviso-de-privacidad`.

### 6.2 Botón flotante de WhatsApp
- Crea el componente `components/WhatsAppButton.tsx`, fijo abajo a la derecha, visible en todas las páginas y respetando `env(safe-area-inset-bottom)` en móvil.
- Número desde `NEXT_PUBLIC_WHATSAPP_NUMBER`, en formato `52XXXXXXXXXX`. Agrégalo a `.env.example`. **Si la variable no existe, el botón no se renderiza.**
- En las páginas de servicio, usa el `whatsappText` correspondiente; en el resto del sitio usa: *Hola, me gustaría agendar una consulta confidencial con ETHOS.*
- URL: `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, con `target="_blank"` y `rel="noopener noreferrer"`.
- Incluye `aria-label="Escribir a ETHOS por WhatsApp"` y un ícono SVG inline (sin librerías nuevas).

**Commit:** `feat(contacto): servicio preseleccionado y botón de WhatsApp`

---

## Fase 7 — Navegación, sitemap y robots

- **Menú:** conserva los mismos 5 enlaces. Si el menú admite submenú, agrega bajo "Servicios" los dos grupos con sus servicios. Si no lo admite, no lo cambies.
- **Footer:** agrega la columna "Servicios" con los 10 enlaces, en el mismo estilo que la columna "Navegación". Cambia el lema inferior "Monitoreo de medios · Reputación corporativa" por **"Estrategia · Comunicación · Reputación"**. No cambies el resto del pie.
- **Sitemap:** `sitemap.ts` (App Router) o `next-sitemap` según lo que exista, con las rutas actuales más las 10 páginas de servicio y `https://www.ethosconsultoriadigital.com` como base.
- **robots:** permite todo y referencia el sitemap. No cambies `index, follow`.

**Commit:** `feat(seo): sitemap con servicios y enlaces en footer`

---

## Fase 8 — Píxel de Meta (preparado, apagado por defecto)

- Crea `components/MetaPixel.tsx` usando `next/script` con `strategy="afterInteractive"`.
- Solo se carga si existe `NEXT_PUBLIC_META_PIXEL_ID`. Agrégala a `.env.example`.
- Eventos:
  - `PageView`: automático.
  - `ViewContent`: al cargar `/servicios/[slug]`, con `{ content_name: name, content_category: group }`.
  - `Lead`: al enviarse con éxito el formulario de contacto.
  - `Contact`: al hacer clic en el botón de WhatsApp.
- **No envíes datos personales** (nombre, correo, teléfono) en los eventos del navegador.
- La API de conversiones del lado del servidor queda para una fase posterior. Deja `// TODO: CAPI` en el handler del formulario.
- Agrega en `/aviso-de-privacidad` un párrafo sobre el uso de cookies de medición de Meta, marcado como `// TODO: revisión legal`. No modifiques el resto del aviso.

**Commit:** `feat(analytics): píxel de Meta condicionado a variable de entorno`

---

## Fase 9 — Verificación final (checklist de aceptación)

Ejecuta y reporta el resultado de cada punto:

- [ ] `npm run lint` y `npm run build` sin errores.
- [ ] Las rutas originales (`/`, `/servicios`, `/trabajos`, `/nosotros`, `/contacto`, `/aviso-de-privacidad`) siguen respondiendo 200 y se ven igual, salvo los cambios descritos.
- [ ] Las 10 rutas `/servicios/{slug}` responden 200; un slug inventado responde 404.
- [ ] Búsqueda en todo el repo (excepto `node_modules` y `.next`) sin resultados en textos visibles o metadatos:
  ```bash
  grep -rniE "ethos\.com\.mx|campanas-politicas|gobierno-entrante|\\$[0-9]|MXN|IVA|precio|tarifa|presupuesto|descuento|político|electoral|candidat|vigilancia|inmediat|garantiz" --include=*.{ts,tsx,js,jsx,md,mdx,json} . | grep -v node_modules | grep -v .next
  ```
  Revisa manualmente cada coincidencia: solo se permite la palabra "presupuesto" si viene del texto legal original.
- [ ] Cada página tiene un canonical propio con `https://www.ethosconsultoriadigital.com`. En particular, `/servicios` debe declarar `https://www.ethosconsultoriadigital.com/servicios`, no la portada.
- [ ] `/servicios` muestra los 10 servicios en dos grupos y, mientras `SHOW_CYBERSECURITY = true`, la tarjeta de Ciberseguridad al final.
- [ ] El inicio ya no menciona "Servicios de monitoreo e inteligencia de medios" como título de la sección de servicios.
- [ ] JSON-LD válido en inicio y en servicios (probar con el Rich Results Test de Google).
- [ ] Vista móvil a 390 px: sin scroll horizontal; el botón de WhatsApp no tapa los CTA.
- [ ] Lighthouse en `/servicios/monitoreo-de-medios`: SEO ≥ 95 y Accesibilidad ≥ 90.
- [ ] Sin variables de entorno, el sitio funciona sin WhatsApp y sin píxel, sin errores en consola.

Entrega un resumen final con: archivos creados, archivos modificados, variables nuevas en `.env.example` y los TODO pendientes de decisión.

---

## Pendientes que decide el usuario (no los resuelve Cursor)

1. Número de WhatsApp de negocio → `NEXT_PUBLIC_WHATSAPP_NUMBER`.
2. ID del píxel de Meta → `NEXT_PUBLIC_META_PIXEL_ID`.
3. Si "Ciberseguridad y datos" se mantiene como servicio (hoy queda visible con `SHOW_CYBERSECURITY = true`).
4. Casos anónimos aprobados para la sección Trabajos.
5. Revisión legal del párrafo de cookies en el aviso de privacidad.
6. Tras publicar: alta del sitemap en Google Search Console y verificación del dominio en Meta Business Manager.
7. Confirmar que la promesa del inicio "Respuesta en menos de 24 horas hábiles" se cumple; si no, suavizarla.
