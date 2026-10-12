type Project = {
  id: string;
  name: string;
  summary: string;
  status: string;
  stack: string[];
  details?: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    id: "ac-maintainer",
    name: "AC Maintainer",
    summary:
      "Una app para llevar el orden de clientes, direcciones y equipos de climatización: qué hay instalado, dónde y de quién.",
    status: "En desarrollo",
    stack: ["TypeScript", "Next.js", "Fastify", "PostgreSQL", "Drizzle"],
    details: [
      {
        title: "Cada equipo tiene su lugar",
        text: "Un equipo nunca está suelto: es de un cliente y está en una dirección. Quise que la app guardara esas conexiones para que nada se pierda.",
      },
      {
        title: "Tus datos, bien resguardados",
        text: "Tu sesión queda protegida y todo lo que se escribe se revisa antes de guardarse, para evitar sorpresas.",
      },
      {
        title: "Un solo punto de entrada",
        text: "La pantalla habla con el servidor y el servidor con la base de datos. Nadie llega directo a donde no debe.",
      },
    ],
  },
];
