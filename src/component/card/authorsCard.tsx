import { PlusIcon } from "lucide-react";
import FormInput from "../ui/input";
import { COLORS } from "../../constants/colors";
import { ChangeEvent } from "react";


interface AuthorsCardProps {
  firstName: string;
  lastName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * AuthorsCard
 * First Name, Last Name inputs + "Add contributors" button.
 */
export default function AuthorsCard({ firstName, lastName, onChange }: AuthorsCardProps) {
  return (
    <div
      style={{
        background: COLORS.background.card,
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "32px",
        width: '50%',
      }}
    >
      <p style={{ fontWeight: 600, fontSize: "14px", marginBottom: "16px", color: COLORS.text.secondary }}>
        Author(s)
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "380px" }}>
        <div style={{ flex: 1 }}>
          <FormInput 
            label="First Name" 
            name="firstName" 
            value={firstName} 
            onChange={onChange} 
            placeholder="" 
          />
        </div>
        <div style={{ flex: 1 }}>
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
        style={{
          marginTop: "16px",
          background: "none",
          border: "none",
          color: COLORS.primary,
          cursor: "pointer",
          fontSize: "13px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: 0,
          fontWeight: 500,
        }}
      >
        <PlusIcon /> Add contributors
      </button>
    </div>
  );
}