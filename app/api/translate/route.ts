import { NextRequest, NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY as string);

export const config = {
  runtime: "edge",
};

interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export default async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const { text, sourceLanguage, targetLanguage }: TranslationRequest =
      await req.json();

    try {
      const modelName = `Helsinki-NLP/opus-mt-${sourceLanguage}-${targetLanguage}`;
      const translation = await hf.translation({
        model: modelName,
        inputs: text,
      });

      return NextResponse.json({ translatedText: translation });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
