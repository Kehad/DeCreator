"use client"
import { ChevronDownIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import { ChangeEvent } from "react";

const LANGUAGE_OPTIONS = ["English", "French", "Spanish", "German"];

interface FormSelectProps {
  label: string;
  options?: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

/**
 * FormSelect
 * @param {string}   label   - Field label
 * @param {string[]} options - Selectable options (defaults to languages)
 */
export default function FormSelect({ 
  label, 
  options = LANGUAGE_OPTIONS,
  value,
  onChange,
  name
}: FormSelectProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>{label}</label>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={onChange}
          name={name}
          style={{
            background: "#363C42",
            border: `1px solid ${COLORS.border.light}`,
            borderRadius: "6px",
            padding: "9px 36px 9px 12px",
            color: COLORS.text.muted,
            fontSize: "13px",
            outline: "none",
            width: "100%",
            appearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="">Select language</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "#666",
          }}
        >
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}