export function ClassesDiagram() {
  return (
    <>
      <svg
        className="diagram-wide"
        viewBox="0 0 620 470"
        role="img"
        aria-labelledby="classes-title classes-desc"
      >
        <title id="classes-title">
          Diagrama de clases del dominio de AC Maintainer
        </title>
        <desc id="classes-desc">
          Un cliente tiene cero o más direcciones. Cada dirección pertenece a un
          cliente y puede tener cero o más equipos instalados. Vista
          simplificada del modelo de datos, con nombres en español.
        </desc>
        <g className="construction" aria-hidden="true">
          <path d="M15 37H605M15 439H605M28 15V455M592 15V455" />
          <path d="M21 37h14M28 30v14M585 439h14M592 432v14" />
        </g>
        <g className="uml-links">
          <path d="M250 124H314V173H365" />
          <path d="M470 258V301H369V335" />
        </g>
        <g className="uml-multiplicity">
          <text x="262" y="112">
            1
          </text>
          <text x="322" y="161">
            0..*
          </text>
          <text x="482" y="280">
            1
          </text>
          <text x="380" y="322">
            0..*
          </text>
        </g>
        <g className="uml-node">
          <rect x="34" y="61" width="216" height="151" />
          <path d="M34 110H250" />
          <text className="uml-title" x="53" y="92">
            Cliente
          </text>
          <text x="53" y="139">
            nombre: String
          </text>
          <text x="53" y="165">
            email: String
          </text>
          <text x="53" y="191">
            rut: String [0..1]
          </text>
        </g>
        <g className="uml-node">
          <rect x="365" y="136" width="224" height="122" />
          <path d="M365 185H589" />
          <text className="uml-title" x="384" y="167">
            Dirección
          </text>
          <text x="384" y="214">
            calle: String
          </text>
          <text x="384" y="240">
            comuna: String
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="166" y="335" width="275" height="102" />
          <path d="M166 384H441" />
          <text className="uml-title" x="185" y="367">
            EquipoInstalado
          </text>
          <text x="185" y="414">
            estado: EstadoEquipo
          </text>
        </g>
        <g className="diagram-note" aria-hidden="true">
          <text x="42" y="272">
            Un modelo pequeño.
          </text>
          <text x="42" y="293">
            Relaciones explícitas.
          </text>
          <path d="M176 279H215L253 318" />
        </g>
        <text className="plate-code" x="522" y="417" aria-hidden="true">
          class
        </text>
      </svg>
      <svg
        className="diagram-mobile"
        viewBox="0 0 340 430"
        role="img"
        aria-labelledby="mobile-classes-title"
      >
        <title id="mobile-classes-title">
          Clases: un cliente tiene cero o más direcciones; una dirección tiene
          cero o más equipos instalados.
        </title>
        <g className="uml-links">
          <path d="M101 116V150H212V175M212 276V309H141V340" />
        </g>
        <g className="uml-multiplicity">
          <text x="113" y="138">
            1
          </text>
          <text x="224" y="164">
            0..*
          </text>
          <text x="225" y="296">
            1
          </text>
          <text x="153" y="330">
            0..*
          </text>
        </g>
        <g className="uml-node">
          <rect x="8" y="15" width="198" height="101" />
          <path d="M8 58H206" />
          <text className="uml-title" x="23" y="43">
            Cliente
          </text>
          <text x="23" y="82">
            nombre: String
          </text>
          <text x="23" y="102">
            email: String
          </text>
        </g>
        <g className="uml-node">
          <rect x="126" y="175" width="205" height="101" />
          <path d="M126 218H331" />
          <text className="uml-title" x="141" y="203">
            Dirección
          </text>
          <text x="141" y="241">
            calle: String
          </text>
          <text x="141" y="261">
            comuna: String
          </text>
        </g>
        <g className="uml-node accent-node">
          <rect x="8" y="340" width="263" height="77" />
          <path d="M8 381H271" />
          <text className="uml-title" x="23" y="368">
            EquipoInstalado
          </text>
          <text x="23" y="404">
            estado: EstadoEquipo
          </text>
        </g>
      </svg>
      <p className="diagram-caption">
        <span>La estructura</span> Cada equipo tiene un lugar y un cliente.
      </p>
    </>
  );
}
