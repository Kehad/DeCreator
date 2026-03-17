import { CheckIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";

interface TooltipProps {
  title: string;
  items: string[];
  side?: "right" | "left";
}

/**
 * Tooltip
 * @param {string}   title  - Bold heading text
 * @param {string[]} items  - Checklist items
 * @param {"right"|"left"} side - Which side the arrow points from
 */
export default function Tooltip({ title, items, side = "right" }: TooltipProps) {
  const isRight = side === "right";

  return (
    <div
      style={{
        position: "relative",
        // top: "50%",
        // ...(isRight ? { left: "calc(100% + 12px)" } : { right: "calc(100% + 12px)" }),
        // transform: "translateY(-50%)",
        background: COLORS.special.tooltipBg,
        color: COLORS.background.card,
        borderRadius: "8px",
        padding: "14px 16px",
        width: "100%",
        zIndex: 50,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          ...(isRight
            ? { left: "-8px", borderRight: `8px solid ${COLORS.special.tooltipBg}`, borderLeft: "none" }
            : { right: "-8px", borderLeft: `8px solid ${COLORS.special.tooltipBg}`, borderRight: "none" }),
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "8px solid transparent",
          borderBottom: "8px solid transparent",
        }}
      />

      <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "10px", lineHeight: 1.3 }}>
        {title}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", lineHeight: 1.4 }}>
            <span style={{ color: COLORS.status.success, marginTop: "1px", flexShrink: 0 }}>
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}