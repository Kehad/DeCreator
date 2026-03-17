import { COLORS } from "@/constants/colors";

export interface PricingCardProps {
  platform: string;
  middleLabel: string;
  middleValue: string;
  middleLink: string;
  rightLabel: string;
  rightValue: string;
  rightLink: string;
  tooltip?: string;
}

export const PricingCard = ({
  platform, middleLabel, middleValue, middleLink,
  rightLabel, rightValue, rightLink, tooltip
}: PricingCardProps) => {
  const isRight = true;
  return (
    <div className="mb-4">
      <div className="bg-[#1a1c20] rounded-xl p-8 border border-white/5 flex items-center justify-between text-center">
        {/* Platform Column */}
        <div className="flex-1 border-r border-white/10">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Platform</p>
          <p className="text-gray-200 font-medium capitalize">{platform}</p>
        </div>

        {/* Middle Metric Column */}
        <div className="flex-1 border-r border-white/10">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{middleLabel}</p>
          <p className="text-gray-200 font-medium mb-1">{middleValue}</p>
          <button className="text-gray-400 text-xs underline decoration-gray-600 hover:text-white transition-colors">
            {middleLink}
          </button>
        </div>

        {/* Right Metric Column */}
        <div className="flex-1">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{rightLabel}</p>
          <p className="text-gray-200 font-medium mb-1">{rightValue}</p>
          <button className="text-gray-400 text-xs underline decoration-gray-600 hover:text-white transition-colors">
            {rightLink}
          </button>
        </div>
      </div>

      {/* Conditional Tooltip/Callout */}
      {tooltip && (
        <div className="relative mt-2 ml-10">
          {/* <div className="absolute -top-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-bottom-[8px] border-b-[#c4c99c]"></div> */}
          {/* Arrow */}
          <div className="relative bg-[#c4c99c] text-[#1a1c20] py-5 px-4 rounded-md inline-block text-xs font-medium">
            <div
              style={{
                position: "absolute",
                top: "-5px",
                right: "50%",
                ...(isRight
                  ? { left: "30px", borderRight: `8px solid ${COLORS.special.tooltipBg}`, borderLeft: "none" }
                  : { right: "-8px", borderLeft: `8px solid ${COLORS.special.tooltipBg}`, borderRight: "none" }),
                // transform: "translateY(-50%)",
                transform: "rotate(90deg) translateX(-50%)",
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
              }}
            />
            {tooltip} <span className="underline cursor-pointer ml-1 font-bold">More</span>
          </div>
        </div>
      )}
    </div>
  );
};