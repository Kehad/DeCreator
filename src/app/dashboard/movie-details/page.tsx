"use client";
import React, { useState, ChangeEvent } from "react";
import AuthorsCard from "@/component/card/authorsCard";
import ManuscriptUploadCard from "@/component/card/manuscriptUploadCard";
import MovieInfoCard from "@/component/card/moviesInfoCard";
import { COLORS } from "@/constants/colors";

const TIPS = [
  "Tag your metadata",
  "Standardize your scene heading",
  "Verify character & dialogue spacing",
];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <div className="flex-1">
      <h1
        className="text-2xl font-bold mb-6"
        style={{ color: COLORS.text.main }}
      >
        Movie Details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <MovieInfoCard
          title={formData.title}
          subtitle={formData.subtitle}
          language={formData.language}
          onChange={handleChange}
        />
        <ManuscriptUploadCard
          tips={TIPS}
          head="How to export your manuscript in ProRes format"
        />
        <AuthorsCard
          firstName={formData.firstName}
          lastName={formData.lastName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}