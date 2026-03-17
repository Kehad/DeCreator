"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { GainSlider } from "./modals/GainSlider";
import { SoundList } from "./modals/soundList";
import { PeakMeters } from "./modals/peaKMeters";
import { MessageCircleWarningIcon, SearchIcon, SpeakerIcon } from "lucide-react";
import { useAnimatedBars } from "./modals/useAnimatedBar";
import { BAR_COUNT, SOUND_GROUPS } from "./constant";
import { COLORS } from "@/constants/colors";
import FooterSoundEffects from "./modals/footerSoundEffects";

export default function SoundEffectsPage() {
    const [inputGain1, setInputGain1] = useState(72);
    const [inputGain2, setInputGain2] = useState(60);
    const [monitorEnabled, setMonitorEnabled] = useState(false);
    const [selected, setSelected] = useState("seismic");
    const [search, setSearch] = useState("");
    const bars = useAnimatedBars(BAR_COUNT, monitorEnabled);

    return (
        <div
            className=" text-white flex flex-col"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Body */}
            <div className="flex justify-between flex-1 gap-0 overflow-hidden">

                {/* Left panel */}
                <main className="min-w-[60%] px- py-4 flex flex-col gap-6 overflow-y-auto">
                    {/* Heading */}
                    <div>

                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[24px] font-semibold text-white/80">Amplitude</span>
                            <SpeakerIcon />
                        </div>
                        <p className="text-[24px] text-white/40 leading-relaxed">
                            Prevents digital distortion while maintaining a consistent loudness
                        </p>
                    </div>

                    {/* Sliders */}
                    <div className="flex flex-col gap-5">
                        <GainSlider plan="gain" left={"-20dB"} middle="0dB" right="20dB" spanText={inputGain1} unit="dB" label="Input gain" value={inputGain1} onChange={setInputGain1} />
                        <GainSlider plan="gain" left={"-20dB"} middle="0dB" right="20dB" spanText={inputGain2} unit="dB" label="Input gain" value={inputGain2} onChange={setInputGain2} />
                        <PeakMeters bars={bars} />
                    </div>


                    <FooterSoundEffects onMonitor={() => setMonitorEnabled((v) => !v)} text=" Monitor levels to prevent clipping distortion" icon="ⓘ" />
                </main>


            </div>
        </div>
    );
}