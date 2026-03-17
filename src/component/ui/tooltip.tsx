import { CheckIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";

interface TooltipProps {
  title: string;
  items: string[];
  side?: "right" | "left" | "top" | "bottom";
}

export default function Tooltip({ title, items, side = "right" }: TooltipProps) {
  const isRight = side === "right";
  const isLeft = side === "left";
  const isTop = side === "top";
  const isBottom = side === "bottom";

  return (
    <div
      className="relative rounded-lg p-4 w-full z-50 shadow-2xl transition-all"
      style={{
        background: COLORS.special.tooltipBg,
        color: COLORS.background.card,
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Arrow - only show on desktop if side is left/right */}
      <div
        className={`absolute hidden lg:block ${
          isRight ? "-left-2 top-1/2 -translate-y-1/2" : ""
        } ${isLeft ? "-right-2 top-1/2 -translate-y-1/2" : ""} ${
          isTop ? "-bottom-2 left-1/2 -translate-x-1/2" : ""
        } ${isBottom ? "-top-2 left-1/2 -translate-x-1/2" : ""}`}
        style={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: isTop || isBottom ? "8px 8px 0 8px" : "8px 8px 8px 0",
          ...(isRight
            ? {
                borderColor: `transparent ${COLORS.special.tooltipBg} transparent transparent`,
                borderWidth: "8px 8px 8px 0",
              }
            : {}),
          ...(isLeft
            ? {
                borderColor: `transparent transparent transparent ${COLORS.special.tooltipBg}`,
                borderWidth: "8px 0 8px 8px",
              }
            : {}),
          ...(isTop
            ? {
                borderColor: `${COLORS.special.tooltipBg} transparent transparent transparent`,
                borderWidth: "8px 8px 0 8px",
              }
            : {}),
          ...(isBottom
            ? {
                borderColor: `transparent transparent ${COLORS.special.tooltipBg} transparent`,
                borderWidth: "0 8px 8px 8px",
              }
            : {}),
        }}
      />

      <p className="font-bold text-sm mb-3 underline decoration-black/10 transition-all hover:decoration-black/30">
        {title}
      </p>

      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
            <span
              className="shrink-0 mt-0.5"
              style={{ color: COLORS.status.success }}
            >
              <CheckIcon size={14} strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}