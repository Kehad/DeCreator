import { COLORS } from "@/constants/colors";

interface GainSliderProps {
    label: string;
    value: number;
    onChange: (v: number) => void;
    left: string | number; // min
    middle?: string;
    right: string | number; // max
    spanText?: string | number;
    mode?: boolean;
    plan?: 'gain' | 'audio';
    step?: number;
    unit?: string;
}

export function GainSlider({ label, value, onChange, left, middle, right, step, spanText, mode, plan, unit }: GainSliderProps) {
    const db = ((value / 100) * 40 - 20).toFixed(1);
    const isPositive = parseFloat(db) > 0;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="text-lg text-white">{label}</span>
                <span className={`text-[13px] font-mono font-medium tabular-nums text-[#FF383C80] `}>
                    {/* {!spanText && {isPositive ? "+" : ""}{db}dB : */}
                    {spanText}{unit}
                </span>
            </div>

            {/* Track */}
            <div style={{ background: COLORS.background.card }} className="py-4 px-4 border-white/10 border rounded-lg">
                {plan === 'gain' && <div className="relative h-[15px] rounded-md bg-[#1e1e1e] border border-white/[0.06] overflow-hidden">
                    {/* Fill */}
                    <div
                        className={`absolute inset-y-0 transition-none ${mode ? 'right-0' : 'left-0'}`}
                        style={{
                            width: `${value}%`,
                            background: mode
                                ? `linear-gradient(270deg, #FF7A7D 0%, #FF383C 100%)` // Right-to-left gradient
                                : `linear-gradient(90deg, #FF7A7D 0%, #FF383C 100%)`, // Left-to-right gradient
                        }}
                    />

                    {/* Native range (invisible but functional) */}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label={label}
                    />
                </div>}
                {plan === 'audio' && (
                    <div className="relative flex items-center">
                        <input
                            type="range"
                            min={left}
                            max={right}
                            step={step}
                            value={typeof value === 'string' ? parseFloat(value) : value}
                            onChange={(e) => onChange(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all"
                        />
                    </div>
                )}
                <div className=" flex items-center justify-between mt-2 px-3 pointer-events-none">
                    <span className="text-[12px] text-white font-mono">-{left}</span>
                    <span className="text-[12px] text-white font-mono">{middle}</span>
                    <span className="text-[12px] text-white font-mono">+{right}</span>
                </div>
            </div>
        </div>
    );
}
