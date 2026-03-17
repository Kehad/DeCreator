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
  platform,
  middleLabel,
  middleValue,
  middleLink,
  rightLabel,
  rightValue,
  rightLink,
  tooltip,
}: PricingCardProps) => {
  const isRight = true;
  return (
    <div className="mb-4">
      <div className="bg-[#1a1c20] rounded-xl p-6 md:p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between text-center gap-6 md:gap-0">
        {/* Platform Column */}
        <div className="w-full md:flex-1 md:border-r border-white/10 pb-6 md:pb-0 border-b md:border-b-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 md:mb-4">Platform</p>
          <p className="text-gray-200 font-medium capitalize text-lg md:text-base">{platform}</p>
        </div>

        {/* Middle Metric Column */}
        <div className="w-full md:flex-1 md:border-r border-white/10 pb-6 md:pb-0 border-b md:border-b-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 md:mb-4">{middleLabel}</p>
          <p className="text-gray-200 font-medium mb-1 text-lg md:text-base">{middleValue}</p>
          <button className="text-gray-400 text-xs underline decoration-gray-600 hover:text-white transition-colors">
            {middleLink}
          </button>
        </div>

        {/* Right Metric Column */}
        <div className="w-full md:flex-1">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 md:mb-4">{rightLabel}</p>
          <p className="text-gray-200 font-medium mb-1 text-lg md:text-base">{rightValue}</p>
          <button className="text-gray-400 text-xs underline decoration-gray-600 hover:text-white transition-colors">
            {rightLink}
          </button>
        </div>
      </div>

      {/* Conditional Tooltip/Callout */}
      {tooltip && (
        <div className="relative mt-4 md:mt-2 ml-4 md:ml-10">
          <div className="relative bg-[#c4c99c] text-[#1a1c20] py-4 px-4 rounded-md inline-block text-xs font-medium max-w-[calc(100%-20px)] md:max-w-md">
            <div
              className="absolute hidden md:block"
              style={{
                top: "-5px",
                right: "50%",
                ...(isRight
                  ? { left: "30px", borderRight: `8px solid ${COLORS.special.tooltipBg}`, borderLeft: "none" }
                  : { right: "-8px", borderLeft: `8px solid ${COLORS.special.tooltipBg}`, borderRight: "none" }),
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