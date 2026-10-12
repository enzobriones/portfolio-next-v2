export function DeploymentDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="deployment-title deployment-desc"
      >
        <title id="deployment-title">
          Diagrama de despliegue simplificado en Railway
        </title>
        <desc id="deployment-desc">
          El navegador se conecta al servicio frontend Next.js. Dentro de
          Railway, Next.js se comunica con la API Fastify por red privada. La
          API accede a PostgreSQL. El diagrama describe la arquitectura
          documentada; no representa una comprobación del despliegue actual.
        </desc>
        <g className="deployment-boundary">
          <rect x="162" y="41" width="438" height="394" />
          <text x="181" y="69">
            Railway / entorno de despliegue
          </text>
        </g>
        <g className="uml-links">
          <path d="M133 203H224M468 222V271H345V321H367" />
        </g>
        <g className="uml-node">
          <path d="M15 145H119V228H15ZM15 145L29 133H133V216L119 228M119 145L133 133" />
          <text x="31" y="175" className="stereotype">
            «device»
          </text>
          <text x="31" y="204">
            Navegador
          </text>
        </g>
        <g className="uml-node">
          <path d="M205 108H544V245H205ZM205 108L221 94H560V231L544 245M544 108L560 94" />
          <text className="stereotype" x="226" y="137">
            «executionEnvironment»
          </text>
          <text className="uml-title" x="226" y="163">
            Servicios de aplicación
          </text>
          <rect x="225" y="184" width="130" height="38" />
          <text x="241" y="209">
            Next.js
          </text>
          <rect x="412" y="184" width="113" height="38" />
          <text x="428" y="209">
            Fastify
          </text>
        </g>
        <path className="uml-links" d="M355 203H412" />
        <text className="micro-note" x="358" y="178">
          privada
        </text>
        <g className="uml-node accent-node">
          <path d="M367 296H549V396H367ZM367 296L383 282H565V382L549 396M549 296L565 282" />
          <text className="stereotype" x="387" y="326">
            «executionEnvironment»
          </text>
          <text className="uml-title" x="387" y="366">
            PostgreSQL
          </text>
        </g>
        <text className="micro-note" x="54" y="252">
          HTTPS
        </text>
        <text className="micro-note" x="199" y="367">
          Persistencia
        </text>
        <text className="micro-note" x="199" y="385">
          separada de la API.
        </text>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-deployment-title"
      >
        <title id="mobile-deployment-title">
          Despliegue en Railway: Next.js consulta Fastify por red privada y
          Fastify se conecta a PostgreSQL. Se omite el navegador en esta vista
          móvil.
        </title>
        <g className="deployment-boundary">
          <rect x="7" y="14" width="324" height="404" />
          <text x="22" y="38">
            Railway
          </text>
        </g>
        <g className="uml-links">
          <path d="M163 139V186M163 264V307" />
        </g>
        <g className="uml-node">
          <path d="M49 69H278V139H49ZM49 69L61 59H290V129L278 139M278 69L290 59" />
          <text className="stereotype" x="68" y="93">
            «executionEnvironment»
          </text>
          <text className="uml-title" x="68" y="119">
            Next.js
          </text>
        </g>
        <text className="micro-note" x="179" y="165">
          red privada
        </text>
        <g className="uml-node">
          <path d="M49 196H278V264H49ZM49 196L61 186H290V254L278 264M278 196L290 186" />
          <text className="stereotype" x="68" y="220">
            «executionEnvironment»
          </text>
          <text className="uml-title" x="68" y="246">
            Fastify
          </text>
        </g>
        <g className="uml-node accent-node">
          <path d="M49 317H278V385H49ZM49 317L61 307H290V375L278 385M278 317L290 307" />
          <text className="stereotype" x="68" y="342">
            «executionEnvironment»
          </text>
          <text className="uml-title" x="68" y="366">
            PostgreSQL
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>El contexto</span> Aplicación y datos, con responsabilidades
        separadas.
      </p>
    </>
  );
}
