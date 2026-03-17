import React from 'react';

interface SliderProps {
  label: string;
  value: number | string;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  unit?: string;
  labelColor?: string;
}

const AudioSlider = ({ label, value, min, max, step = 1, onChange, unit = "", labelColor = "text-red-500" }: SliderProps) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{label}</span>
        <span className={`${labelColor} text-xs font-mono font-bold`}>{value}{unit}</span>
      </div>
      <div className="relative flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={typeof value === 'string' ? parseFloat(value) : value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-red-600 hover:accent-red-500 transition-all"
        />
      </div>
      <div className="flex justify-between text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">
        <span>{min}{unit}</span>
        <span className="opacity-50">{(min + max) / 2}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export default AudioSlider;