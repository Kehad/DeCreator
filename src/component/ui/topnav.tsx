"use client";
import { BellIcon } from "lucide-react";
import { COLORS } from "../../constants/colors";
import NextImage from "next/image";
import logo from "@public/png/logo.png";
import Link from "next/link";
import { PATH } from "@/constants/path";

const NAV_ITEMS = ["Dashboard", "Movies", "Sales"];

interface TopNavProps {
  activeTab?: string;
  isLogo?: boolean;
}

function Logo() {
  return (
    <div className="flex items-center gap-2 py-5 px-2">
      <NextImage
        src={logo}
        alt="Logo"
        width={150}
        height={30}
        className="w-auto h-auto max-w-[120px] md:max-w-none"
      />
    </div>
  );
}

export default function TopNav({ activeTab = "Movies", isLogo = true }: TopNavProps) {
  return (
    <header
      className="flex items-center h-[75px] border-b px-4 md:px-8 gap-4 md:gap-8 sticky top-0 z-20"
      style={{
        borderBottomColor: COLORS.border.dark,
        background: COLORS.background.main,
      }}
    >
      {isLogo && <Logo />}

      <nav className="hidden md:flex items-center gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = item === activeTab;
          const href = item === "Movies" ? PATH.movieDetails : PATH.dashboard;
          return (
            <Link
              key={item}
              href={href}
              className={`px-3 py-3 text-sm md:text-base font-medium transition-colors ${
                isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
              }`}
              style={{
                textDecoration: "none",
              }}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      {/* Mobile view indicator for active tab if on mobile and no logo */}
      {!isLogo && (
        <div className="md:hidden font-medium text-white truncate text-sm">
          {activeTab}
        </div>
      )}

      <div className="flex flex-1 items-center justify-end gap-3 md:gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
          <BellIcon size={20} />
        </button>

        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{
            background: COLORS.border.light,
            color: COLORS.text.secondary,
          }}
        >
          CO
        </div>
      </div>
    </header>
  );
}