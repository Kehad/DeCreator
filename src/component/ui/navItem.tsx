import { ChevronDownIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import Link from "next/link";


import { ReactNode } from "react";

interface NavItemProps {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  hasChevron?: boolean;
  indent?: boolean;
  onClick?: () => void;
  href?: string;
}

/**
 * NavItem
 * @param {ReactNode} icon       - Optional icon element
 * @param {string}    label      - Nav label text
 * @param {boolean}   active     - Highlighted/active state
 * @param {boolean}   hasChevron - Show expand chevron
 * @param {boolean}   indent     - Extra left padding (for sub-items)
 * @param {function}  onClick    - Click handler
 * @param {string}    href       - Optional link destination
 */
export default function NavItem({ icon, label, active, hasChevron, indent, onClick, href }: NavItemProps) {
  const content = (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: indent ? "15px 16px 15px 32px" : "15px 16px",
        borderRadius: "6px",
        cursor: "pointer",
        background: active ? "#FB374833" : "transparent",
        color: active ? COLORS.primary : "#9a9a9a",
        fontSize: "16px",
        transition: "background 0.15s, color 0.15s",
      }}
    >
      {icon && <span style={{ opacity: active ? 1 : 0.7 }}>{icon}</span>}
      <span style={{ flex: 1 }}>{label}</span>
      {hasChevron && <ChevronDownIcon />}
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
}