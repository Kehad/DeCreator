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

export default function MovieInfoCard({ title, subtitle, language, onChange }: MovieInfoCardProps) {
  return (
    <div
      className="rounded-xl p-6 mb-5 relative"
      style={{
        background: COLORS.background.card,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-w-0">
        {/* Title field + tooltip */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <FormInput label="Title" name="title" value={title} onChange={onChange} placeholder="" />
          <FormInput label="Subtitle" name="subtitle" value={subtitle} onChange={onChange} placeholder="" />
          <FormSelect label="Language" name="language" value={language} onChange={onChange} />
        </div>
        
        <div className="lg:w-80 shrink-0">
          <Tooltip title={TITLE_TOOLTIP.title} items={TITLE_TOOLTIP.items} side="right" />
        </div>
      </div>
    </div>
  );
}