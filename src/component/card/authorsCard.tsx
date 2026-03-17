import { PlusIcon } from "lucide-react";
import FormInput from "../ui/input";
import { COLORS } from "../../constants/colors";
import { ChangeEvent } from "react";

interface AuthorsCardProps {
  firstName: string;
  lastName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthorsCard({ firstName, lastName, onChange }: AuthorsCardProps) {
  return (
    <div
      className="rounded-xl p-6 mb-8 w-full md:w-2/3 lg:w-1/2"
      style={{
        background: COLORS.background.card,
      }}
    >
      <p
        className="font-semibold text-sm mb-4"
        style={{ color: COLORS.text.secondary }}
      >
        Author(s)
      </p>

      <div className="flex flex-col md:flex-row gap-4 max-w-xl">
        <div className="flex-1">
          <FormInput
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
            placeholder=""
          />
        </div>
        <div className="flex-1">
          <FormInput
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder=""
          />
        </div>
      </div>

      <button
        type="button"
        className="mt-4 bg-transparent border-none cursor-pointer flex items-center gap-2 p-0 font-medium text-sm transition-opacity hover:opacity-80"
        style={{
          color: COLORS.primary,
        }}
      >
        <PlusIcon size={16} /> Add contributors
      </button>
    </div>
  );
}