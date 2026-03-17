"use client";

import { useState } from "react";
import { SoundList } from "./modals/soundList";
import { SearchIcon } from "lucide-react";
import { SOUND_GROUPS } from "./constant";
import { COLORS } from "@/constants/colors";
import DryWetMix from "./modals/dryWetModule";
import { SpectralShaping } from "./modals/spectraShaping";

export default function SoundEffectsLayout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState("amplitude");
  const [search, setSearch] = useState("");

  return (
    <div
      className="text-white flex flex-col gap-4"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90">
          Sound effects
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 min-h-0">
        {/* Main Content Area */}
        <main className="flex-1 min-w-0 py-2">
          {selected === "amplitude" && children}
          {selected === "dry-wet" && <DryWetMix />}
          {selected === "spectra-shaping" && <SpectralShaping />}
        </main>

        {/* Sidebar */}
        <aside
          className="w-full lg:w-80 shrink-0 rounded-xl border border-white/5 flex flex-col gap-6 p-6 overflow-hidden"
          style={{ background: COLORS.background.card }}
        >
          {/* Search */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus-within:border-red-600/50 transition-colors">
            <SearchIcon className="w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search effects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white/80 placeholder:text-white/20 outline-none"
            />
          </div>

          {/* Sound list */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            <SoundList
              groups={SOUND_GROUPS}
              selected={selected}
              onSelect={setSelected}
              search={search}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
