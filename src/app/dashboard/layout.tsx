"use client";

import { useState } from "react";
import Button from "@/component/ui/button";
import FormActions from "@/component/ui/formactions";
import Sidebar from "@/component/ui/sidebar";
import TopNav from "@/component/ui/topnav";
import { COLORS } from "@/constants/colors";
import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getActiveItem = () => {
    if (pathname.startsWith("/dashboard/movie-details")) return "Movie Details";
    if (pathname.startsWith("/dashboard/cover")) return "Cover";
    if (pathname.startsWith("/dashboard/editing")) return "Editing";
    if (pathname.startsWith("/dashboard/platform-pricing")) return "Platform pricing";
    if (pathname.startsWith("/dashboard/sound-effects")) return "Sound Effects";
    if (pathname.startsWith("/dashboard/marketing-materials")) return "Marketing Materials";
    if (pathname.startsWith("/dashboard/early-reviews")) return "Early Reviews";
    if (pathname.startsWith("/dashboard/marketplace")) return "Marketplace";
    return "Movie Details";
  };

  const formData = 22;

  const handleSave = () => {
    console.log("Saving form data:", formData);
    alert("Movie details saved successfully!");
  };

  const handleDiscard = () => {
    console.log("Saving form data:", formData);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background: COLORS.background.main,
        color: COLORS.text.secondary,
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed/Offcanvas on mobile, static on desktop */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar activeItem={getActiveItem()} />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <header className="sticky top-0 z-30 flex items-center bg-[#0E1012] lg:hidden px-4 h-16 border-b border-[#2a2a2a]">
          <button
            onClick={toggleSidebar}
            className="p-2 text-white hover:bg-white/10 rounded-md"
          >
            {isSidebarOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <span className="ml-4 font-bold text-lg">DeCreator</span>
        </header>

        <TopNav activeTab="Dashboard" isLogo={false} />

        <main className="px-4 py-6 md:px-10 md:pt-10">
          <div className="flex justify-end mb-6">
            <Button
              variant="outline"
              iconRight={<ChevronRightIcon size={18} />}
              onClick={() => console.log("Previewing with:", formData)}
            >
              Preview
            </Button>
          </div>

          <div className="flex-1">
            {children}
          </div>

          <div className="py-10">
            <FormActions onSave={handleSave} onDiscard={handleDiscard} />
          </div>
        </main>
      </div>
    </div>
  );
}