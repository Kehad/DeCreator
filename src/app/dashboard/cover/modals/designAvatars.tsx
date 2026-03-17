import { DesignerAvatarsProps } from "../types";

export function DesignerAvatars({ designers }: DesignerAvatarsProps) {
  return (
    <div className="flex items-center">
      {designers.map((d, i) => (
        <div
          key={d.id}
          className={`
            w-20 h-20 rounded-full border-2 border-[#1a1a1a]
            flex items-center justify-center
            text-[11px] font-semibold text-white/80
            ${d.color}
            ${i > 0 ? "-ml-[35px]" : ""}
          `}
          aria-label={`Designer ${d.initials}`}
        >
          {d.initials}
        </div>
      ))}
    </div>
  );
}



