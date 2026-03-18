"use client";

import { useState } from "react";
import NavItem from "./navItem";
import { ChevronDownIcon, DollarSignIcon, ImageIcon, LogOutIcon, MegaphoneIcon, ScissorsIcon, StarIcon, TagIcon } from "lucide-react";

import { COLORS } from "../../constants/colors";
import NextImage from "next/image";
import logo from "@public/png/logo.png";


import { ReactNode } from "react";
import { SoundIcon } from "@public/svg";

import { PATH } from "@/constants/path";
import Image from "next/image";

interface SectionLabelProps {
  children: ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        margin: "16px 8px 8px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "1px",
        color: "#555",
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "20px 8px 24px" }}>
      <Image src={logo} alt="Logo" width={200} height={40} style={{ width: "auto", height: "auto" }} />
    </div>
  );
}

interface SidebarProps {
  activeItem?: string;
}

/**
 * Sidebar
 * @param {string} activeItem - The currently active nav item label
 */
export default function Sidebar({ activeItem = "Movie Details" }: SidebarProps) {
  const [soundEffectsOpen, setSoundEffectsOpen] = useState(true);

  return (
    <aside
      style={{
        width: "250px",
        flexShrink: 0,
        background: COLORS.background.surface,
        borderRight: `1px solid ${COLORS.border.dark}`,
        display: "flex",
        flexDirection: "column",
        padding: "0 8px 16px",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <Logo />

      <NavItem label="Marketplace" href={PATH.marketplace} active={activeItem === "Marketplace"} />

      <SectionLabel>Essentials</SectionLabel>

      <NavItem icon={<TagIcon />} label="Movie Details" href={PATH.movieDetails} active={activeItem === "Movie Details"} />

      {/* Sound Effects — collapsible */}
      {/* <div
        onClick={() => setSoundEffectsOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "7px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#9a9a9a",
          fontSize: "13.5px",
        }}
      >
        <SoundIcon />
        <span style={{ flex: 1 }}>Sound Effects</span>
        <span
          style={{
            transform: soundEffectsOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <ChevronDownIcon />
        </span>
      </div>


      {soundEffectsOpen && (
        <>
          <NavItem icon={<ImageIcon />} label="Cover" indent href={PATH.cover} active={activeItem === "Cover"} />
          <NavItem icon={<ScissorsIcon />} label="Editing" indent href={PATH.editing} active={activeItem === "Editing"} />
          <NavItem icon={<DollarSignIcon />} label="Platform pricing" indent href={PATH.platformPricing} active={activeItem === "Platform pricing"} />
        </>
      )} */}

       <NavItem icon={<SoundIcon />} label="Sound Effects" href={PATH.soundEffects} active={activeItem === "Sound Effects"} />
       <NavItem icon={<ImageIcon />} label="Cover" href={PATH.cover} active={activeItem === "Cover"} />
          <NavItem icon={<ScissorsIcon />} label="Editing" href={PATH.editing} active={activeItem === "Editing"} />
          <NavItem icon={<DollarSignIcon />} label="Platform pricing" href={PATH.platformPricing} active={activeItem === "Platform pricing"} />


      <SectionLabel>Tools</SectionLabel>

      <NavItem icon={<MegaphoneIcon />} label="Marketing Materials" href={PATH.marketingMaterials} active={activeItem === "Marketing Materials"} />
      <NavItem icon={<StarIcon />} label="Early Reviews" href={PATH.earlyReviews} active={activeItem === "Early Reviews"} />

      <div style={{ flex: 1 }} />

      <NavItem icon={<LogOutIcon />} label="Log Out" href="/" />
      <p style={{ fontSize: "10px", color: "#444", textAlign: "center", marginTop: "12px" }}>
        All Rights Reserved
      </p>
    </aside>
  );
}