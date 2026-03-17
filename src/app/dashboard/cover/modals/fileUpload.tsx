import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { ACCEPTED_FORMATS } from "./constant";
import Image from "next/image";
import { COLORS } from "@/constants/colors";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  preview: string | null;
  fileName: string | null;
}

export function UploadZone({ onFileSelect, preview, fileName }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && ACCEPTED_FORMATS.includes(file.type)) onFileSelect(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  console.log(COLORS.background.card)

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`
        flex flex-col items-center justify-center gap-3
        rounded-lg border transition-all duration-200 cursor-pointer
        min-h-[140px] p-6 bg-${COLORS.background.card}
        ${isDragging
          ? "border-[#e85046]/60"
          : `border-white/10 bg-${COLORS.background.card} hover:border-white/20 hover:bg-white/[0.05]`
        }
      `}
      onClick={() => inputRef.current?.click()}
      role="button"
      aria-label="Upload cover image"
    >
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.pdf,.png"
        className="hidden"
        onChange={handleChange}
      />

      {preview ? (
        <div className="flex flex-col items-center gap-2">
          <Image
            src={preview}
            alt="Cover preview"
            width={80}
            height={112}
            className="rounded object-cover shadow-lg"
          />
          <span className="text-xs text-white/40 truncate max-w-[160px]">{fileName}</span>
        </div>
      ) : (
        <>
          <div className={`flex items-center justify-center w-10 h-10 rounded-md border bg-${COLORS.background.card} border-white/15`}>
            <svg className="w-5 h-5 text-white/40" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3v10M6 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 14v1.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white/80">Upload cover</p>
            <p className="text-xs text-white/30 mt-0.5">JPG &amp; PDF format</p>
          </div>
        </>
      )}
    </div>
  );
}

// <UploadZone
//   onFileSelect={handleFileSelect}
//   preview={preview}
//   fileName={fileName}
// />