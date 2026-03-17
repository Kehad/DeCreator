"use client";

import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { COLORS } from "../../constants/colors";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled,
  style,
  className = "",
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          background: COLORS.primary,
          color: COLORS.text.main,
          border: "none",
          boxShadow: isHovered ? "0 4px 12px rgba(192, 25, 42, 0.3)" : "none",
        };
      case "secondary":
        return {
          background: "#363C42",
          color: COLORS.text.secondary,
          border: `1px solid ${COLORS.border.light}`,
          boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "none",
        };
      case "outline":
        return {
          background: "transparent",
          color: COLORS.primary,
          border: `1px solid ${COLORS.primary}`,
        };
      case "ghost":
        return {
          background: isHovered ? "rgba(255, 255, 255, 0.05)" : "transparent",
          color: COLORS.text.muted,
          border: "none",
        };
      case "danger":
        return {
          background: "#dc2626",
          color: COLORS.text.main,
          border: "none",
          boxShadow: isHovered ? "0 4px 12px rgba(220, 38, 38, 0.3)" : "none",
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    // Only apply padding inline if not provided via className (simple check for px- or p-)
    const hasPaddingClass = className.includes("px-") || className.includes("p-") || className.includes("py-");
    
    if (hasPaddingClass) {
      switch (size) {
        case "sm": return { fontSize: "12px" };
        case "lg": return { fontSize: "15px" };
        case "md": default: return { fontSize: "13px" };
      }
    }

    switch (size) {
      case "sm": return { padding: "6px 12px", fontSize: "12px" };
      case "lg": return { padding: "12px 32px", fontSize: "15px" };
      case "md": default: return { padding: "9px 22px", fontSize: "13px" };
    }
  };

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "6px",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    fontWeight: 700,
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: disabled || loading ? 0.6 : isActive ? 0.9 : 1,
    width: fullWidth ? "100%" : className.includes("w-") ? undefined : "auto",
    outline: "none",
    userSelect: "none",
    transform: isActive ? "scale(0.98)" : "scale(1)",
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  return (
    <button
      {...props}
      className={className}
      disabled={disabled || loading}
      style={baseStyles}
      onMouseEnter={() => !disabled && !loading && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => !disabled && !loading && setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {loading && (
        <Loader2
          size={16}
          className="animate-spin"
          style={{ animation: "spin 1s linear infinite" }}
        />
      )}
      {!loading && iconLeft && (
        <span className="flex items-center shrink-0">{iconLeft}</span>
      )}
      <span className="whitespace-nowrap">{children}</span>
      {!loading && iconRight && (
        <span className="flex items-center shrink-0">{iconRight}</span>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }}
      />
    </button>
  );
}

