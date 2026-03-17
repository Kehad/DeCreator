"use client";
import React, { useState } from 'react';
import { GainSlider } from './GainSlider';
import { COLORS } from '@/constants/colors';
import Footer from './footerSoundEffects';
import FooterSoundEffects from './footerSoundEffects';

const DryWetMix = () => {
  const [mix, setMix] = useState(65);
  const [inputGain1, setInputGain1] = useState(72);


  return (
    <div className="">
      <header className="mb-6">

        <div className="flex items-center gap-2 mt-4">
          <span className="text-xl font-semibold uppercase tracking-wider text-gray-300">Dry/Wet Mix</span>
          <span className="text-gray-500">⚙️</span>
        </div>
        <p className="text-md text-white/60 mt-2 leading-relaxed italic">
          Allows parallel processing. Blends the character of the effect without losing the clarity of the original sound.
        </p>
      </header>

      <div className="mb-8">

        <GainSlider label="Mix Ratio" plan='gain' spanText={inputGain1} unit='% Wet' value={inputGain1} onChange={setInputGain1} left='0% (Dry)' middle='50/50' right='100%(Wet)' />


        <div className="space-y-3 mt-4">
          <SignalRow label="Dry signal" value={100 - mix} color="bg-gray-600" />
          <SignalRow label="Wet signal" value={mix} color="bg-red-600" />
        </div>
      </div>

      <div className="mb-8">

        <GainSlider label="Balance Display" plan='gain' spanText="Visual" value={inputGain1} onChange={setInputGain1} left='Dry' middle='50/50' right='Wet' mode={true} />

      </div>


      <FooterSoundEffects text="Parallel processing maintains original clarity" icon={"ⓘ"} />
    </div>
  );
};

const SignalRow = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="flex justify-between items-center p-6 rounded-xl border border-white/10 hover:border-gray-700 transition-colors" style={{ background: COLORS.background.card }}>
    <div className="flex items-center gap-4">
      <div className={`w-5.5 h-5.5 rounded-full ${color} shadow-sm`} />
      <span className="text-sm font-medium text-gray-200">{label}</span>
    </div>
    <span className="text-xs text-gray-500 font-mono">{value}%</span>
  </div>
);

export default DryWetMix;