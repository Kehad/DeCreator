"use client"
import { HTMLInputTypeAttribute, ChangeEvent } from "react";
import { COLORS } from "../../constants/colors";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

/**
 * FormInput
 * @param {string} label       - Field label
 * @param {string} placeholder - Input placeholder
 * @param {string} type          - Input type (default: "text")
 */
export default function FormInput({ 
  label, 
  placeholder = "", 
  type = "text",
  value,
  onChange,
  name
}: FormInputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        style={{
          background: "#363C42",
          border: `1px solid ${COLORS.border.light}`,
          borderRadius: "6px",
          padding: "9px 12px",
          color: COLORS.text.secondary,
          fontSize: "13px",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = COLORS.primary)}
        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = COLORS.border.light)}
      />
    </div>
  );
}