export function ToolsDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="tools-title tools-desc"
      >
        <title id="tools-title">Con qué trabajo</title>
        <desc id="tools-desc">
          Cuatro piezas conectadas entre sí: el backend, los datos, las
          interfaces y la infraestructura donde todo se pone en marcha.
        </desc>
        <g className="uml-links">
          <path d="M284 116H336M159 171V250M461 171V250M284 305H336" />
        </g>
        <g className="uml-node">
          <rect x="34" y="61" width="250" height="110" />
          <path d="M34 110H284" />
          <text className="uml-title" x="53" y="92">
            Backend
          </text>
          <text x="53" y="145">
            TypeScript · Fastify
          </text>
        </g>
        <g className="uml-node">
          <rect x="336" y="61" width="250" height="110" />
          <path d="M336 110H586" />
          <text className="uml-title" x="355" y="92">
            Datos
          </text>
          <text x="355" y="145">
            PostgreSQL · Drizzle
          </text>
        </g>
        <g className="uml-node">
          <rect x="34" y="250" width="250" height="110" />
          <path d="M34 299H284" />
          <text className="uml-title" x="53" y="281">
            Interfaces
          </text>
          <text x="53" y="334">
            React · Next.js
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="336" y="250" width="250" height="110" />
          <path d="M336 299H586" />
          <text className="uml-title" x="355" y="281">
            Infraestructura
          </text>
          <text x="355" y="334">
            Google Cloud · Railway
          </text>
        </g>
        <g className="diagram-note" aria-hidden="true">
          <text x="42" y="412">
            Cada pieza ayuda a las demás.
          </text>
        </g>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-tools-title"
      >
        <title id="mobile-tools-title">
          Con qué trabajo: backend, datos, interfaces e infraestructura,
          conectados entre sí.
        </title>
        <g className="uml-links">
          <path d="M170 87V113M170 185V211M170 283V309" />
        </g>
        <g className="uml-node">
          <rect x="40" y="15" width="260" height="72" />
          <path d="M40 53H300" />
          <text className="uml-title" x="55" y="40">
            Backend
          </text>
          <text x="55" y="75">
            TypeScript · Fastify
          </text>
        </g>
        <g className="uml-node">
          <rect x="40" y="113" width="260" height="72" />
          <path d="M40 151H300" />
          <text className="uml-title" x="55" y="138">
            Datos
          </text>
          <text x="55" y="173">
            PostgreSQL · Drizzle
          </text>
        </g>
        <g className="uml-node">
          <rect x="40" y="211" width="260" height="72" />
          <path d="M40 249H300" />
          <text className="uml-title" x="55" y="236">
            Interfaces
          </text>
          <text x="55" y="271">
            React · Next.js
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="40" y="309" width="260" height="72" />
          <path d="M40 347H300" />
          <text className="uml-title" x="55" y="334">
            Infraestructura
          </text>
          <text x="55" y="369">
            Google Cloud · Railway
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>Con qué trabajo</span> Desde donde viven los datos hasta lo que
        ves en pantalla.
      </p>
    </>
  );
}
