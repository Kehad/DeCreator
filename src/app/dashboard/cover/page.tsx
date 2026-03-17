"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { COLORS } from "@/constants/colors";
import { UploadZone } from "./modals/fileUpload";
import { DESIGNERS, PRO_PERKS, TIPS } from "./modals/constant";
import { DesignerAvatars } from "./modals/designAvatars";
import { CheckIcon } from "@public/svg";
import ManuscriptUploadCard from "@/component/card/manuscriptUploadCard";


// ─── Main Component ───────────────────────────────────────────────────────────

export default function CoverPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const progress = preview ? 100 : 0;

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFileName(file.name);
    setIsDirty(true);
  };

  const handleDiscard = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName(null);
    setIsDirty(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSaving(false);
    setIsDirty(false);
  };

  return (
    <div className="min-h-scree text-white flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Page body */}
      <main className="flex-1  w-full px-5 py-8 flex flex-col gap-5">

        {/* Heading */}
        <h1 className="text-xl font-semibold tracking-tight text-white/90">Cover</h1>

        {/* Upload card */}
          <ManuscriptUploadCard tips={TIPS} head="How to design a great movie cover" />

        {/* Pro designer card */}
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5" style={{ backgroundColor: COLORS.background.card}}>
          <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-6">

            {/* Left – copy */}
            <div className="flex-1 flex flex-col gap-3 text-[20px] max-w-[50%]">
              <p className=" text-white/60 leading-relaxed">
                Get a professional cover for your movie with the help of one of the hundreds of curated designers.{" "}
                <button className="text-[#e85046] hover:text-[#f06b62] transition-colors  font-medium underline-offset-2 hover:underline">
                  View samples gallery
                </button>
              </p>

              <ul className="flex flex-col gap-1.5">
                {PRO_PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-white/50">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – order */}
            <div className="flex flex-col items-center gap-3">
              <DesignerAvatars designers={DESIGNERS} />
              <p className="text-lg font-semibold text-white/90">$150</p>
              <button
                className="
                  px-5 py-2 rounded-md
                  border border-[#e85046]/70
                  text-[#e85046] text-sm font-medium
                  hover:bg-[#e85046] hover:text-white
                  active:scale-[0.97]
                  transition-all duration-150
                  whitespace-nowrap
                "
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}