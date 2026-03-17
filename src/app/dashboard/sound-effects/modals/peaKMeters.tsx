interface PeakMetersProps {
  bars: number[];
}
 
export function PeakMeters({ bars }: PeakMetersProps) {

  const peak = Math.max(...bars);
  const peakDb = ((peak - 0.5) * 30).toFixed(1);
//  console.log(bars, peak, peakDb)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/50">Peak meters</span>
        <span className={`text-[11px] font-mono font-medium tabular-nums ${peak > 0.85 ? "text-[#e85046]" : "text-white/40"}`}>
          {parseFloat(peakDb) > 0 ? "+" : ""}{peakDb}dB
        </span>
      </div>
 
      <div className="h-[160px] rounded-md bg-[#1a1a1a] border border-white/[0.06] flex items-end gap-[1.5px] px-2 py-2 overflow-hidden">
        {bars.map((v, i) => {
          const isClipping = v > 0.88;
          return (
            <div
              key={i}
              className="flex-1 rounded-[1px] transition-none"
              style={{
                height: `${v * 100}%`,
                background: isClipping
                  ? "#e85046"
                  : `linear-gradient(to top, #6b2020 0%, #e85046 100%)`,
                opacity: isClipping ? 1 : 0.7 + v * 0.3,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}