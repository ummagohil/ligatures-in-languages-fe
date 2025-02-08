import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY as string);

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  // Allow POST method and handle the request body
  if (req.method === "POST") {
    try {
      // Get JSON body from the POST request
      const { text, sourceLanguage, targetLanguage } = await req.json();
      const modelName = `Helsinki-NLP/opus-mt-${sourceLanguage}-${targetLanguage}`;

      const translationResponse = await hf.translation({
        model: modelName,
        inputs: text,
      });

      if (
        translationResponse &&
        Array.isArray(translationResponse) &&
        translationResponse.length > 0 &&
        "translation_text" in translationResponse[0]
      ) {
        return NextResponse.json({
          translatedText: translationResponse[0].translation_text,
        });
      } else {
        return NextResponse.json(
          { error: "No translation found" },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("Translation failed:", error);
      return NextResponse.json(
        { error: "Translation failed" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
