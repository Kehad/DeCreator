export const COLORS = {
  primary: "#c0192a",
  background: {
    main: "#0E1012",
    surface: "#121417",
    card: "#1C1F24",
  },
  text: {
    main: "#ffffff",
    secondary: "#e0e0e0",
    muted: "#888888",
    disabled: "#666666",
    white: "#ffffff",
  },
  border: {
    dark: "#2a2a2a",
    light: "#3a3a3a",
  },
  status: {
    success: "#6a7a3a",
    error: "#c0192a",
  },
  special: {
    tooltipBg: "#c4c99c]",
  }
} as const;

export type AppColor = typeof COLORS;
