"use client";

import { COLORS } from "@/constants/colors";
import { ScissorsIcon } from "lucide-react";

export default function EditingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] py-10">
      <div
        className="p-8 md:p-12 rounded-[24px] text-center border max-w-[500px] w-full"
        style={{
          background: "#FB374811",
          borderColor: "#FB374822",
        }}
      >
        <div
          className="w-20 h-20 rounded-[20px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_-5px_#FB374844]"
          style={{
            background: COLORS.primary,
          }}
        >
          <ScissorsIcon size={40} color="white" />
        </div>
        <h1
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: COLORS.text.main }}
        >
          Movie Editing
        </h1>
        <p
          className="leading-relaxed text-base md:text-lg"
          style={{ color: COLORS.text.secondary }}
        >
          Edit your movie scenes and sequences. Use our advanced AI-assisted tools to refine your masterpiece.
        </p>
      </div>
    </div>
  );
}

