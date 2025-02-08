"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InputTextProps {
  text: string;
  onChange: (text: string) => void;
  onTranslate: () => void;
}

export default function InputText({
  text,
  onChange,
  onTranslate,
}: InputTextProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow p-2 rounded bg-[#B24703] text-[#F9F2D6] placeholder:text-[#F9F2D6] placeholder:opacity-100 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Input text here..."
      />
      <Button
        onClick={onTranslate}
        type="button"
        className="bg-[#F9F2D6] text-[#859978] hover:bg-[#F9F2D6]/90"
      >
        Translate
      </Button>
    </div>
  );
}
