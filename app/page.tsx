"use client";

import { useState } from "react";
import InputText from "./components/input";
import { Language } from "./components/language";
import Result from "./components/result";

export default function Home() {
  const [text, setText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("fr");
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
    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
      <h1 className="text-[#F9F2D6] font-bold text-3xl mb-8 text-center">
        Ligatures in Languages
      </h1>
      <div className="w-full max-w-2xl px-24">
        <div className="flex items-center gap-4 mb-4 w-full">
          <div className="w-full">
            <Language
              value={sourceLanguage}
              onChange={setSourceLanguage}
              type="source"
            />
          </div>
          <div className="w-full">
            <Language
              value={targetLanguage}
              onChange={setTargetLanguage}
              type="target"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <InputText
            text={text}
            onChange={setText}
            onTranslate={handleTranslate}
          />
        </div>
        <div className="w-full">
          <Result translation={translation} error={error} />
        </div>
      </div>
    </div>
  );
}
