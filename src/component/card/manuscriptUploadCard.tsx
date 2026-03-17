"use client";
import { CheckIcon, UploadIcon, FileTextIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import { useRef, useState, ChangeEvent } from "react";

type TipsProps = {
  tips: string[];
  head: string;
};

export default function ManuscriptUploadCard({ tips, head }: TipsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      console.log("Selected file:", file);
    }
  };

  return (
    <div
      className="rounded-xl p-0 mb-5 flex flex-col lg:flex-row overflow-hidden border border-white/5"
      style={{
        background: COLORS.background.card,
      }}
    >
      {/* Drop / upload zone */}
      <div
        onClick={handleUploadClick}
        className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 gap-4 cursor-pointer min-h-[160px] border-b lg:border-b-0 lg:border-r transition-colors hover:bg-white/5"
        style={{
          borderColor: COLORS.border.light,
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept=".fdx,.pdf,.fountain"
        />

        {fileName ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className="flex items-center gap-3"
              style={{ color: COLORS.primary }}
            >
              <FileTextIcon size={28} />
              <span className="font-semibold text-base">{fileName}</span>
            </div>
            <p className="text-sm opacity-60 m-0">Click to replace</p>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="bg-transparent rounded-lg px-6 py-3 text-sm cursor-pointer flex items-center gap-2 border font-medium transition-all hover:scale-[1.02]"
              style={{
                borderColor: COLORS.border.light,
                color: COLORS.text.secondary,
              }}
            >
              <UploadIcon size={18} /> Upload manuscript
            </button>
            <p className="text-xs opacity-50 m-0">FDX, PDF & Fountain format</p>
          </>
        )}
      </div>

      {/* Tips panel */}
      <div className="flex-1 p-6 lg:p-10 bg-white/2">
        <p
          className="font-bold text-lg mb-6"
          style={{ color: COLORS.text.secondary }}
        >
          {head}
        </p>
        <ul className="list-none p-0 m-0 flex flex-col gap-4">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base"
              style={{ color: COLORS.text.white }}
            >
              <span
                className="shrink-0 mt-1"
                style={{ color: COLORS.status.success }}
              >
                <CheckIcon size={20} />
              </span>
              <span className="leading-snug">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}