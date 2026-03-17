"use client";

import { COLORS } from "@/constants/colors";
import { DollarSignIcon } from "lucide-react";

export default function PlatformPricingPage() {
  return (
    <main style={{ flex: 1, padding: "32px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <div style={{ 
        background: "#FB374811", 
        padding: "40px", 
        borderRadius: "24px", 
        textAlign: "center",
        border: "1px solid #FB374822",
        maxWidth: "500px"
      }}>
        <div style={{ 
          width: "80px", 
          height: "80px", 
          background: COLORS.primary, 
          borderRadius: "20px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          margin: "0 auto 24px",
          boxShadow: "0 10px 20px -5px #FB374844"
        }}>
          <DollarSignIcon size={40} color="white" />
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: COLORS.text.main }}>
          Platform Pricing
        </h1>
        <p style={{ color: COLORS.text.secondary, lineHeight: "1.6", fontSize: "16px" }}>
          Configure your movie's pricing across different steaming platforms. Set your subscription tiers and rental fees.
        </p>
      </div>
    </main>
  );
}
