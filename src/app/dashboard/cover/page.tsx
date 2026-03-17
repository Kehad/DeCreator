"use client";

import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { DESIGNERS, PRO_PERKS, TIPS } from "./modals/constant";
import { DesignerAvatars } from "./modals/designAvatars";
import { CheckIcon } from "@public/svg";
import ManuscriptUploadCard from "@/component/card/manuscriptUploadCard";

export default function CoverPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSaving(false);
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      <h1 className="text-2xl font-bold" style={{ color: COLORS.text.main }}>
        Cover
      </h1>

      <ManuscriptUploadCard
        tips={TIPS}
        head="How to design a great movie cover"
      />

      {/* Pro designer card */}
      <div
        className="rounded-xl border border-white/5 p-6 md:p-10"
        style={{ background: COLORS.background.card }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Left – copy */}
          <div className="flex-1 flex flex-col gap-6 max-w-full">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: COLORS.text.secondary }}
            >
              Get a professional cover for your movie with the help of one of
              the hundreds of curated designers.{" "}
              <button
                className="hover:underline transition-colors font-semibold"
                style={{ color: COLORS.primary }}
              >
                View samples gallery
              </button>
            </p>

            <ul className="flex flex-col gap-3">
              {PRO_PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-base" style={{ color: COLORS.text.muted }}>
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – order */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto shrink-0 py-6 lg:py-0 border-t lg:border-t-0 border-white/10">
            <div className="flex flex-col items-center lg:items-end gap-2">
              <DesignerAvatars designers={DESIGNERS} />
              <p
                className="text-2xl font-bold"
                style={{ color: COLORS.text.main }}
              >
                $150
              </p>
            </div>
            <button
              className="
                  w-full lg:w-48 px-8 py-3 rounded-lg
                  border font-bold text-base
                  active:scale-[0.98]
                  transition-all duration-200
                  whitespace-nowrap
                "
              style={{
                borderColor: COLORS.primary,
                color: COLORS.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.primary;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = COLORS.primary;
              }}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}