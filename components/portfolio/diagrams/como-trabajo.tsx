export function WorkflowDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="workflow-title workflow-desc"
      >
        <title id="workflow-title">Cómo trabajo</title>
        <desc id="workflow-desc">
          Tú cuentas tu idea. Enzo la va armando y prueban juntos. Al final te
          entrega algo que funciona.
        </desc>
        <defs>
          <marker
            id="workflow-arrow"
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
          <rect x="36" y="55" width="128" height="47" />
          <text className="seq-name" x="100" y="84">
            Tú
          </text>
          <rect x="246" y="55" width="128" height="47" />
          <text className="seq-name" x="310" y="84">
            Enzo
          </text>
          <rect x="456" y="55" width="128" height="47" />
          <text className="seq-name" x="520" y="84">
            Tu proyecto
          </text>
        </g>
        <g className="lifeline">
          <path d="M100 102V427M310 102V427M520 102V427" />
        </g>
        <g className="activation">
          <rect x="304" y="150" width="12" height="174" />
          <rect x="514" y="204" width="12" height="56" />
        </g>
        <g className="sequence-message">
          <path d="M100 152H303" markerEnd="url(#workflow-arrow)" />
          <path d="M316 206H513" markerEnd="url(#workflow-arrow)" />
        </g>
        <g className="uml-message">
          <text x="112" y="140">
            tengo una idea
          </text>
          <text x="338" y="194">
            lo voy armando
          </text>
        </g>
        <g className="sequence-return">
          <path d="M514 260H317" markerEnd="url(#workflow-arrow)" />
          <path d="M304 324H101" markerEnd="url(#workflow-arrow)" />
        </g>
        <g className="uml-message">
          <text x="344" y="248">
            lo probamos
          </text>
          <text x="140" y="312">
            te lo entrego
          </text>
        </g>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-workflow-title"
      >
        <title id="mobile-workflow-title">
          Cómo trabajo: tú cuentas tu idea, Enzo te muestra avances y al final
          te entrega algo que funciona.
        </title>
        <defs>
          <marker
            id="mobile-workflow-arrow"
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
          <rect x="10" y="25" width="120" height="42" />
          <text className="seq-name" x="70" y="51">
            Tú
          </text>
          <rect x="190" y="25" width="120" height="42" />
          <text className="seq-name" x="250" y="51">
            Enzo
          </text>
        </g>
        <g className="lifeline">
          <path d="M70 67V405M250 67V405" />
        </g>
        <g className="activation">
          <rect x="244" y="130" width="12" height="220" />
        </g>
        <g className="sequence-message">
          <path
            d="M70 137H243M70 280H243"
            markerEnd="url(#mobile-workflow-arrow)"
          />
        </g>
        <g className="sequence-return">
          <path
            d="M244 215H71M244 345H71"
            markerEnd="url(#mobile-workflow-arrow)"
          />
        </g>
        <g className="uml-message">
          <text x="80" y="122">
            tengo una idea
          </text>
          <text x="80" y="203">
            te muestro avances
          </text>
          <text x="80" y="268">
            ajustemos
          </text>
          <text x="80" y="333">
            te lo entrego
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>Cómo trabajo</span> Hablo claro y te muestro avances desde el
        principio.
      </p>
    </>
  );
}
