import FormInput from "../ui/input";
import FormSelect from "../ui/select";
import Tooltip from "../ui/tooltip";
import { COLORS } from "../../constants/colors";
import { ChangeEvent } from "react";


const TITLE_TOOLTIP = {
  title: "How to come up with a great movie title",
  items: [
    "Identify the core of the story",
    "Choose words that create emotion or curiosity",
    "Keep it simple and memorable",
  ],
};

interface MovieInfoCardProps {
  title: string;
  subtitle: string;
  language: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

/**
 * MovieInfoCard
 * Fields: Title, Subtitle, Language — with a contextual tooltip on the title field.
 */
export default function MovieInfoCard({ title, subtitle, language, onChange }: MovieInfoCardProps) {
  return (
    <div
      style={{
        background: COLORS.background.card,
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "16px", maxWidth: "100%" }}>
        {/* Title field + tooltip */}
        <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
          <FormInput label="Title" name="title" value={title} onChange={onChange} placeholder="" />
          <FormInput label="Subtitle" name="subtitle" value={subtitle} onChange={onChange} placeholder="" />
          <FormSelect label="Language" name="language" value={language} onChange={onChange} />
        </div>
        <Tooltip title={TITLE_TOOLTIP.title} items={TITLE_TOOLTIP.items} side="right" />

      </div>
    </div>
  );
}