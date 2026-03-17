"use client"
import React, { useState, ChangeEvent } from "react";
import AuthorsCard from "@/component/card/authorsCard";
import ManuscriptUploadCard from "@/component/card/manuscriptUploadCard";
import MovieInfoCard from "@/component/card/moviesInfoCard";
import Button from "@/component/ui/button";
import FormActions from "@/component/ui/formactions";
import { COLORS } from "@/constants/colors";
import { ChevronRightIcon } from "lucide-react";

const TIPS = [
  "Tag your metadata",
  "Standardize your scene heading",
  "Verify character & dialogue spacing",
];

// export const TIPS = [
//   { id: 1, text: "Tag your metadata" },
//   { id: 2, text: "Standardize your scene heading" },
//   { id: 3, text: "Verify character & dialogue spacing" },
// ];

export default function MovieDetailsPage() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        language: "",
        firstName: "",
        lastName: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        console.log("Saving form data:", formData);
        alert("Movie details saved successfully!");
    };

    const handleDiscard = () => {
        if (confirm("Are you sure you want to discard your changes?")) {
            setFormData({
                title: "",
                subtitle: "",
                language: "",
                firstName: "",
                lastName: "",
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <main style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
            {/* Preview button */}
            
            <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: COLORS.text.main }}>
                Movie Details
            </h1>
            <form onSubmit={handleSubmit}>
                <MovieInfoCard 
                    title={formData.title} 
                    subtitle={formData.subtitle} 
                    language={formData.language} 
                    onChange={handleChange} 
                />
                <ManuscriptUploadCard tips={TIPS} head="How to export your manuscript in ProRes format" />
                <AuthorsCard 
                    firstName={formData.firstName} 
                    lastName={formData.lastName} 
                    onChange={handleChange} 
                />
                {/* <FormActions onSave={handleSave} onDiscard={handleDiscard} /> */}
            </form>
        </main>
    );
}