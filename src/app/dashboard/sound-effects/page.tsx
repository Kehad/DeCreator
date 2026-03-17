"use client";

import { useState } from "react";
import { GainSlider } from "./modals/GainSlider";
import { PeakMeters } from "./modals/peaKMeters";
import { SpeakerIcon } from "lucide-react";
import { useAnimatedBars } from "./modals/useAnimatedBar";
import { BAR_COUNT } from "./constant";
import FooterSoundEffects from "./modals/footerSoundEffects";

export default function SoundEffectsPage() {
  const [inputGain1, setInputGain1] = useState(72);
  const [inputGain2, setInputGain2] = useState(60);
  const [monitorEnabled, setMonitorEnabled] = useState(false);
  const bars = useAnimatedBars(BAR_COUNT, monitorEnabled);

  return (
    <div
      className="text-white flex flex-col gap-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <header>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-white/90">Amplitude</h1>
          <SpeakerIcon size={24} className="text-[#e85046]" />
        </div>
        <p className="text-xl text-white/40 leading-relaxed max-w-2xl">
          Prevents digital distortion while maintaining a consistent loudness
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 flex flex-col gap-8">
          {/* Sliders */}
          <div className="space-y-6">
            <GainSlider
              plan="gain"
              left="-20dB"
              middle="0dB"
              right="20dB"
              spanText={inputGain1}
              unit="dB"
              label="Input gain"
              value={inputGain1}
              onChange={setInputGain1}
            />
            <GainSlider
              plan="gain"
              left="-20dB"
              middle="0dB"
              right="20dB"
              spanText={inputGain2}
              unit="dB"
              label="Input gain"
              value={inputGain2}
              onChange={setInputGain2}
            />
          </div>

          <PeakMeters bars={bars} />

          <FooterSoundEffects
            onMonitor={() => setMonitorEnabled((v) => !v)}
            text=" Monitor levels to prevent clipping distortion"
            icon="ⓘ"
          />
        </main>
      </div>
    </div>
  );
}