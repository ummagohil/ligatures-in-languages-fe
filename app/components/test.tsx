"use client";
import React, { useState } from "react";

const TranslationForm: React.FC = () => {
  const [text, setText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) {
      setError("Please enter text to translate");
      return;
    }

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, sourceLanguage, targetLanguage }),
      });

      const data = await response.json();

      if (response.ok) {
        setTranslation(data.translatedText);
        setError("");
      } else {
        setError(data.error || "Translation request failed");
        setTranslation("");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setError("An unexpected error occurred");
      setTranslation("");
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>{translation}</p>
    </div>
  );
};

export default TranslationForm;
