interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const fontSizes = { sm: "17px", md: "22px", lg: "30px" };
  const fontSize = fontSizes[size];

  const base: React.CSSProperties = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.16em",
    display: "inline-flex",
    alignItems: "center",
  };

  /*
   * Layout strategy:
   * SERE  — white, normal spacing
   * N     — white, z-index: 0 (behind), no trailing letter-spacing
   * I     — brand blue, z-index: 2 (in front), negative margin pulls it LEFT
   *          so its body sits directly on top of N's rightmost vertical stroke.
   *          marginLeft ≈ -(I natural advance width) so I right edge ≈ N right edge.
   * T     — brand blue
   */

  return (
    <span className={`select-none ${className}`} style={base} aria-label="SERENIT">
      <span style={{ color: "#5D5C61" }}>SERE</span>

      {/* N — behind */}
      <span style={{ color: "#5D5C61", letterSpacing: 0, position: "relative", zIndex: 0 }}>
        N
      </span>

      {/* I — overlaps N's right stroke; sits on N's rightmost vertical */}
      <span
        style={{
          color: "#ffffff",
          letterSpacing: 0,
          marginLeft: "-0.15em",
          position: "relative",
          zIndex: 2,
          fontSize,
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        I
      </span>

      {/* T — brand blue, restore spacing */}
      <span style={{ color: "#ffffff", position: "relative", zIndex: 2, letterSpacing: "0.16em", marginLeft: "0.16em" }}>
        T
      </span>
    </span>
  );
}
