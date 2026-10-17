export type Project = {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  status: string;
  role: string;
  stack: string[];
  intro: string;
  context: string[];
  architecture: { label: string; name: string; external?: boolean }[];
  figure: string;
  decisions: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    id: "ac-maintainer",
    name: "AC Maintainer",
    tagline: "Gestión de climatización",
    summary:
      "Clientes, direcciones y equipos de climatización: cotizaciones que se convierten en órdenes de trabajo, pagos y avisos de mantención. Multi-tenant: cada empresa ve solo lo suyo.",
    status: "En desarrollo",
    role: "Diseño y desarrollo completo",
    stack: ["TypeScript", "Next.js", "Fastify", "PostgreSQL", "Drizzle"],
    intro:
      "Una aplicación multi-tenant para empresas de climatización: qué equipos hay instalados, dónde, de quién y cuándo toca su mantención.",
    context: [
      "Las empresas de climatización llevan clientes, equipos y mantenciones en planillas y mensajes sueltos. Nada conecta un equipo con su dirección, su cliente ni su historial.",
      "La app guarda esas relaciones y recorre el flujo completo: cotización, orden de trabajo, pago y aviso de la próxima mantención. Cualquier empresa puede registrarse y operar con sus propios datos.",
    ],
    architecture: [
      { label: "next.js", name: "Frontend" },
      { label: "fastify", name: "API" },
      { label: "tenant", name: "Contexto por solicitud" },
      { label: "postgresql", name: "Datos con RLS", external: true },
    ],
    figure: "fig. 1 — de la pantalla a la base de datos, siempre con tenant",
    decisions: [
      {
        title: "Aislamiento en la base de datos",
        text: "Cada solicitud fija el tenant y PostgreSQL aplica Row Level Security. Un error en la API no puede mostrar datos de otra empresa.",
      },
      {
        title: "Todo se valida en la frontera",
        text: "Zod revisa cada entrada antes de tocar la base de datos. El login y la reautenticación tienen límite de intentos.",
      },
      {
        title: "Reglas del negocio en el servidor",
        text: "Una cotización vencida no se puede aceptar, y al aceptarla se crea la orden de trabajo. Las reglas viven en un solo lugar.",
      },
    ],
  },
  {
    id: "sii-pymes",
    name: "SII Pymes",
    tagline: "ERP para pymes chilenas",
    summary:
      "Un sistema de gestión multi-tenant pensado para pymes chilenas, con integración al SII para la facturación electrónica.",
    status: "En desarrollo",
    role: "Diseño y desarrollo completo",
    stack: ["TypeScript", "NestJS", "Fastify", "PostgreSQL", "Drizzle"],
    intro:
      "Un ERP multi-tenant para pymes chilenas que integra la emisión de documentos tributarios con el Servicio de Impuestos Internos.",
    context: [
      "Muchas pymes chilenas operan con herramientas separadas para vender, facturar y llevar su contabilidad, y cumplir con el SII termina siendo un trabajo manual.",
      "Estoy construyendo un sistema único donde cada empresa gestiona su operación y emite sus documentos al SII. El proyecto está en etapa inicial; esta página describe el diseño.",
    ],
    architecture: [
      { label: "cliente", name: "Aplicación web" },
      { label: "nestjs + fastify", name: "API" },
      { label: "postgresql", name: "Datos por tenant" },
      { label: "externo", name: "SII", external: true },
    ],
    figure: "fig. 1 — diseño previsto: de la aplicación al SII",
    decisions: [
      {
        title: "Multi-tenant desde el primer día",
        text: "Cada empresa tiene sus datos aislados desde el modelo. Agregar un cliente no cambia el sistema.",
      },
      {
        title: "Configuración validada al arrancar",
        text: "El servicio valida su entorno con Zod y no inicia si falta algo, en lugar de fallar en producción.",
      },
      {
        title: "Una sola puerta hacia el SII",
        text: "La comunicación con el SII vive en un módulo propio, para que certificados, folios y reintentos no se repitan en cada flujo.",
      },
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
