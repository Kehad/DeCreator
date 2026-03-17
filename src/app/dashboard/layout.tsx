"use client"
import Button from "@/component/ui/button";
import FormActions from "@/component/ui/formactions";
import Sidebar from "@/component/ui/sidebar";
import TopNav from "@/component/ui/topnav";
import { COLORS } from "@/constants/colors";
import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getActiveItem = () => {
    if (pathname.startsWith("/dashboard/movie-details")) return "Movie Details";
    if (pathname.startsWith("/dashboard/cover")) return "Cover";
    if (pathname.startsWith("/dashboard/editing")) return "Editing";
    if (pathname.startsWith("/dashboard/platform-pricing")) return "Platform pricing";
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

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: COLORS.background.main,
        color: COLORS.text.secondary,
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflow: "hidden",
      }}
    >
      <Sidebar activeItem={getActiveItem()} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <TopNav activeTab="Movies" isLogo={false} />
        <main className="px-10 pt-10">
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
            <Button
              variant="outline"
              iconRight={<ChevronRightIcon size={18} />}
              onClick={() => console.log("Previewing with:", formData)}
            >
              Preview
            </Button>
          </div>

          {children}
          <div className="p-5">
          <FormActions onSave={handleSave} onDiscard={handleDiscard} />
          </div>
        </main>
      </div>
    </div>
  );
}