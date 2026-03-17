"use client"
import { CheckIcon, UploadIcon, FileTextIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import { useRef, useState, ChangeEvent } from "react";







type TipsProps = {
  tips: string[];
  head: string;
}

/**
 * ManuscriptUploadCard
 * Upload area (left) + ProRes export tips panel (right).
 */
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
      style={{
        background: COLORS.background.card,
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "20px",
        display: "flex",
        gap: "32px",
        alignItems: "stretch",
      }}
    >
      {/* Drop / upload zone */}
      <div
        onClick={handleUploadClick}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 16px",
          gap: "10px",
          cursor: "pointer",
          minHeight: "120px",
          borderRight: `1px solid ${COLORS.border.light}`,
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ color: COLORS.primary, display: "flex", alignItems: "center", gap: "8px" }}>
              <FileTextIcon size={24} />
              <span style={{ fontWeight: 600, fontSize: "14px" }}>{fileName}</span>
            </div>
            <p style={{ color: COLORS.text.muted, fontSize: "12px", margin: 0 }}>
              Click to replace
            </p>
          </div>
        ) : (
          <>
            <button
              type="button"
              style={{
                background: COLORS.background.card,
                border: `1px solid ${COLORS.border.light}`,
                color: COLORS.text.secondary,
                borderRadius: "6px",
                padding: "9px 20px",
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <UploadIcon /> Upload manuscript
            </button>
            <p style={{ color: COLORS.text.muted, fontSize: "12px", margin: 0 }}>
              FDX, PDF &amp; Fountain format
            </p>
          </>
        )}
      </div>

      {/* Tips panel */}
      <div style={{ flex: 1, borderRadius: "8px", padding: "20px" }}>
        <p style={{ fontWeight: 700, fontSize: "18px", marginBottom: "12px", color: COLORS.text.secondary }}>
         {head}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {tips.map((tip, i) => (
            <li
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "16px", color: COLORS.text.white }}
            >
              <span style={{ color: COLORS.status.success, marginTop: "1px", flexShrink: 0 }}>
                <CheckIcon />
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}