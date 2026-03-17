import { SoundGroup } from "./types";

export const SOUND_GROUPS: SoundGroup[] = [
  {
    heading: "Favorites",
    items: [
      { id: "amplitude", label: "Amplitude" },
      { id: "dry-wet", label: "Dry and Wet Mix" },
      { id: "spectra-shaping", label: "Spectra Shaping" },
      { id: "seismic", label: "The seismic charge" },
      { id: "thx", label: "The THX" },
      { id: "wilhelm-fav", label: "The Wilhelm scream" },

    ],
  },
  {
    heading: "Commonly used",
    items: [
      { id: "telephone", label: "Universal telephone rings" },
      { id: "castle", label: "The castle thunder" },
      { id: "wilhelm-common", label: "The Wilhelm scream" },
      { id: "hawk", label: "The red tailed hawk" },
      { id: "foley", label: "Foley essentials" },
    ],
  },
  {
    heading: "Categories",
    items: [
      { id: "hard", label: "Hard sound effects" },
      { id: "foley-cat", label: "Foley sounds" },
      { id: "backgrounds", label: "Backgrounds" },
      { id: "designed", label: "Designed sound effects" },
      { id: "dialogue", label: "Dialogue & ADR" },
    ],
  },
];

export const BAR_COUNT = 100;