// ─── Types ────────────────────────────────────────────────────────────────────

export interface SoundItem {
  id: string;
  label: string;
}

export interface SoundGroup {
  heading: string;
  items: SoundItem[];
}