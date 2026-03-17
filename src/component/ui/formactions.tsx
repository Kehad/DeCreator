import { COLORS } from "../../constants/colors";
import Button from "./button";

interface FormActionsProps {
  onSave: () => void;
  onDiscard: () => void;
}

export default function FormActions({ onSave, onDiscard }: FormActionsProps) {
  let progress = 60;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full">
      <div className="w-full sm:w-auto order-2 sm:order-1">
        <Button
          type="button"
          variant="outline"
          onClick={onDiscard}
          className="w-full sm:w-auto px-10 md:px-16"
        >
          Discard changes
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full sm:w-auto order-1 sm:order-2">
        <div className="flex items-center gap-3">
          <div className="w-24 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#e85046] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span
            className="text-xs font-medium tabular-nums"
            style={{ color: progress === 0 ? "#4ade80" : "#e85046" }}
          >
            {progress}% complete
          </span>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto px-12 md:px-20"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

