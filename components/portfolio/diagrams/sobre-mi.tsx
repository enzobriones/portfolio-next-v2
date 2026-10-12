export function AboutDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="about-title about-desc"
      >
        <title id="about-title">Quién soy</title>
        <desc id="about-desc">
          Enzo es ingeniero de software, trabaja con datos y nube y disfruta
          resolver problemas. De su trabajo salen cero o más proyectos.
        </desc>
        <g className="construction" aria-hidden="true">
          <path d="M15 37H605M15 439H605M28 15V455M592 15V455" />
          <path d="M21 37h14M28 30v14M585 439h14M592 432v14" />
        </g>
        <g className="uml-links">
          <path d="M174 212V273H437V335" />
        </g>
        <g className="uml-multiplicity">
          <text x="186" y="240">
            1
          </text>
          <text x="449" y="325">
            0..*
          </text>
        </g>
        <text className="micro-note" x="250" y="266">
          construye
        </text>
        <g className="uml-node">
          <rect x="34" y="61" width="280" height="151" />
          <path d="M34 110H314" />
          <text className="uml-title" x="53" y="92">
            Enzo
          </text>
          <text x="53" y="139">
            oficio: Ingeniero de Software
          </text>
          <text x="53" y="165">
            trabaja con: datos y nube
          </text>
          <text x="53" y="191">
            disfruta: resolver problemas
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="300" y="335" width="275" height="102" />
          <path d="M300 384H575" />
          <text className="uml-title" x="319" y="367">
            Proyectos
          </text>
          <text x="319" y="414">
            los de hoy y los que vienen
          </text>
        </g>
        <g className="diagram-note" aria-hidden="true">
          <text x="400" y="100">
            Siempre
          </text>
          <text x="400" y="121">
            aprendiendo algo.
          </text>
          <path d="M392 108H330" />
        </g>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-about-title"
      >
        <title id="mobile-about-title">
          Quién soy: Enzo, ingeniero de software que trabaja con datos y nube,
          construye cero o más proyectos.
        </title>
        <g className="uml-links">
          <path d="M133 116V250" />
        </g>
        <g className="uml-multiplicity">
          <text x="145" y="140">
            1
          </text>
          <text x="145" y="240">
            0..*
          </text>
        </g>
        <text className="micro-note" x="145" y="192">
          construye
        </text>
        <g className="uml-node">
          <rect x="8" y="15" width="250" height="101" />
          <path d="M8 58H258" />
          <text className="uml-title" x="23" y="43">
            Enzo
          </text>
          <text x="23" y="82">
            Ingeniero de Software
          </text>
          <text x="23" y="102">
            trabaja con datos y nube
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="8" y="250" width="263" height="77" />
          <path d="M8 291H271" />
          <text className="uml-title" x="23" y="278">
            Proyectos
          </text>
          <text x="23" y="314">
            los de hoy y los que vienen
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>Quién soy</span> Me gusta entender cómo funcionan las cosas.
      </p>
    </>
  );
}
