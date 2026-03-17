import { COLORS } from "../../constants/colors";
import Button from "./button";

interface FormActionsProps {
  onSave: () => void;
  onDiscard: () => void;
}

/**
 * FormActions
 * @param {function} onSave    - Save button handler
 * @param {function} onDiscard - Discard changes handler
 */
export default function FormActions({ onSave, onDiscard }: FormActionsProps) {
  let progress = 60;

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" , padding: ""}}>
      <Button
        type="button"
        variant="outline"
        onClick={onDiscard}
        style={{ padding: "10px 60px" }}
      >
        Discard changes
      </Button>

      <div className="flex space-x-10">
        <div className="hidden sm:flex items-center gap-2">
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
          style={{ padding: "10px 70px" }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
