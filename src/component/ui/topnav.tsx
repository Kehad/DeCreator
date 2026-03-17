import { BellIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import NextImage from "next/image";
import logo from "@public/png/logo.png";
import Link from "next/link";
import { PATH } from "@/constants/path";


const NAV_ITEMS = ["Dashboard", "Movies", "Sales"];

interface TopNavProps {
  activeTab?: string;
  isLogo?: boolean
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "20px 8px 24px" }}>
      <NextImage src={logo} alt="Logo" width={200} height={40} style={{ width: "auto", height: "auto" }} />
    </div>
  );
}

/**
 * TopNav
 * @param {string} activeTab - Currently active tab label
 */
export default function TopNav({ activeTab = "Movies", isLogo = true }: TopNavProps) {
  return (
    <header
      style={{
        height: "75px",
        borderBottom: `1px solid ${COLORS.border.dark}`,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        gap: "32px",
        background: COLORS.background.main,
        flexShrink: 0,
      }}
    >

      {isLogo && <Logo />}

      {NAV_ITEMS.map((item) => {
        const isActive = item === activeTab;
        const href = item === "Movies" ? PATH.movieDetails : PATH.dashboard;
        return (
          <Link
            key={item}
            href={href}
            style={{
              textDecoration: "none",
              color: isActive ? COLORS.text.main : COLORS.text.muted,
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: isActive ? 600 : 400,
              padding: "12px 12px",
              // borderBottom: isActive ? `2px solid ${COLORS.primary}` : "2px solid transparent",
            }}
          >
            {item}
          </Link>
        );
      })}

      {/* <div style={{ flex: 1 }} /> */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "flex-end", flex: 1 }}>
        <button style={{ background: "none", border: "none", color: "#888", cursor: "pointer", padding: "6px" }}>
          <BellIcon />
        </button>

        {/* Avatar */}
        <div
          style={{
            width: "32px",
            height: "32px",
            background: COLORS.border.light,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: 700,
            color: COLORS.text.secondary,
          }}
        >
          CO
        </div>
      </div>

    </header>
  );
}