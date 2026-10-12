export function SequenceDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="sequence-title sequence-desc"
      >
        <title id="sequence-title">
          Diagrama de secuencia: consultar clientes
        </title>
        <desc id="sequence-desc">
          El navegador solicita la página a Next.js. Next.js consulta la API
          Fastify desde el servidor. Fastify consulta PostgreSQL y devuelve
          datos para que Next.js renderice la página. Se omiten detalles de
          autenticación en esta vista.
        </desc>
        <defs>
          <marker
            id="seq-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className="uml-node">
          <rect x="14" y="55" width="127" height="47" />
          <text className="seq-name" x="77" y="84">
            Navegador
          </text>
          <rect x="176" y="55" width="115" height="47" />
          <text className="seq-name" x="233" y="84">
            Next.js
          </text>
          <rect x="333" y="55" width="115" height="47" />
          <text className="seq-name" x="390" y="84">
            Fastify
          </text>
          <rect x="483" y="55" width="124" height="47" />
          <text className="seq-name" x="545" y="84">
            PostgreSQL
          </text>
        </g>
        <g className="lifeline">
          <path d="M77 102V427M233 102V427M390 102V427M545 102V427" />
        </g>
        <g className="activation">
          <rect x="227" y="150" width="12" height="229" />
          <rect x="384" y="204" width="12" height="119" />
          <rect x="539" y="257" width="12" height="35" />
        </g>
        <g className="sequence-message">
          <path d="M77 152H226" markerEnd="url(#seq-arrow)" />
          <path d="M239 206H383" markerEnd="url(#seq-arrow)" />
          <path d="M396 259H538" markerEnd="url(#seq-arrow)" />
        </g>
        <g className="uml-message">
          <text x="82" y="140">
            abrir clientes
          </text>
          <text x="245" y="193">
            GET /clients
          </text>
          <text x="412" y="247">
            consulta
          </text>
        </g>
        <g className="sequence-return">
          <path d="M539 292H397" markerEnd="url(#seq-arrow)" />
          <path d="M384 324H240" markerEnd="url(#seq-arrow)" />
          <path d="M227 378H78" markerEnd="url(#seq-arrow)" />
        </g>
        <g className="uml-message">
          <text x="430" y="312">
            filas
          </text>
          <text x="289" y="347">
            datos
          </text>
          <text x="93" y="401">
            página renderizada
          </text>
        </g>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-sequence-title"
      >
        <title id="mobile-sequence-title">
          Secuencia resumida: el navegador pide una página a Next.js; Next.js
          consulta Fastify y renderiza los datos devueltos. Se omite la base de
          datos en esta vista móvil.
        </title>
        <defs>
          <marker
            id="mobile-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className="uml-node">
          <rect x="2" y="25" width="99" height="42" />
          <text className="seq-name" x="51" y="51">
            Navegador
          </text>
          <rect x="127" y="25" width="86" height="42" />
          <text className="seq-name" x="170" y="51">
            Next.js
          </text>
          <rect x="243" y="25" width="94" height="42" />
          <text className="seq-name" x="290" y="51">
            Fastify
          </text>
        </g>
        <g className="lifeline">
          <path d="M51 67V405M170 67V405M290 67V405" />
        </g>
        <g className="activation">
          <rect x="164" y="137" width="12" height="209" />
          <rect x="284" y="212" width="12" height="67" />
        </g>
        <g className="sequence-message">
          <path d="M51 137H163M176 212H283" markerEnd="url(#mobile-arrow)" />
        </g>
        <g className="sequence-return">
          <path d="M284 279H177M164 346H52" markerEnd="url(#mobile-arrow)" />
        </g>
        <g className="uml-message">
          <text x="54" y="122">
            abrir página
          </text>
          <text x="180" y="195">
            GET /clients
          </text>
          <text x="206" y="302">
            datos
          </text>
          <text x="55" y="370">
            renderizado
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>El recorrido</span> El navegador no consulta la API directamente.
      </p>
    </>
  );
}
