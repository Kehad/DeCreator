"use client";

import { useState, useEffect, useRef, useCallback, Children } from "react";
import { GainSlider } from "./modals/GainSlider";
import { SoundList } from "./modals/soundList";
import { PeakMeters } from "./modals/peaKMeters";
import { MessageCircleWarningIcon, SearchIcon, SpeakerIcon } from "lucide-react";
import { useAnimatedBars } from "./modals/useAnimatedBar";
import { BAR_COUNT, SOUND_GROUPS } from "./constant";
import { COLORS } from "@/constants/colors";
import DryWetMix from "./modals/dryWetModule";
import { SpectralShaping } from "./modals/spectraShaping";




// ─── Sub-components ───────────────────────────────────────────────────────────




export default function SoundEffectsPage({ children }) {
    const [inputGain1, setInputGain1] = useState(72);
    const [inputGain2, setInputGain2] = useState(60);
    const [monitorEnabled, setMonitorEnabled] = useState(true);
    const [selected, setSelected] = useState("seismic");
    const [search, setSearch] = useState("");
    const bars = useAnimatedBars(BAR_COUNT, monitorEnabled);

    console.log(selected)

    return (
        <div
            className=" text-white flex flex-col"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Body */}
                <h1 className="text-[32px] font-semibold tracking-tight text-white/90 mb-2">
                    Sound effects
                </h1>
            <div className="flex justify-between flex-1 gap-0 overflow-hidden">

                {/* Left panel */}
                <main className="min-w-[60%] px- py-4 flex flex-col gap-6 overflow-y-auto">
                    {/* Heading */}
                    {/* {children} */}
                    {/* <DryWetMix /> */}
                    {selected === 'amplitude'  && children}
                    {selected === 'dry-wet'  && <DryWetMix />}
                    {selected === 'spectra-shaping'  && <SpectralShaping />}
                </main>

                {/* Right sidebar */}
                <aside className="w-[310px min-w-[30%] flex-shrink-0 border-l border-white/[0.06] flex flex-col gap-4 px-4 py-5 overflow-y-auto" style={{ background: COLORS.background.card }}>
                    {/* Search */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#1e1e1e] border border-white/[0.07]">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 bg-transparent text-sm text-white/70 placeholder:text-white/25 outline-none"
                        />
                    </div>

                    {/* Sound list */}
                    <SoundList
                        groups={SOUND_GROUPS}
                        selected={selected}
                        onSelect={setSelected}
                        search={search}
                    />
                </aside>
            </div>
        </div>
    );
}