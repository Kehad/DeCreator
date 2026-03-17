export interface DesignerAvatarsProps {
  designers: Designer[];
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Designer {
  id: number;
  initials: string;
  color: string;
}

export interface Tip {
  id: number;
  text: string;
}
