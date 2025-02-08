"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Arabic", value: "ar" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
];

interface LanguageProps {
  value: string;
  onChange: (value: string) => void;
  type: "source" | "target";
}

export function Language({ value, onChange, type }: LanguageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between bg-[#B24703] text-[#F9F2D6] border-none hover:bg-[#B24703]/90 hover:text-[#CB9B8E]"
        >
          {languages.find((lang) => lang.value === value)?.label ||
            `Select ${type} language`}
          {isOpen ? (
            <ChevronUp className="h-4 w-4 opacity-50" />
          ) : (
            <ChevronDown className="h-4 w-4 opacity-50" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full bg-[#B24703] text-[#F9F2D6] border-none p-1 min-w-[var(--radix-dropdown-trigger-width)]"
        align="start"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onSelect={() => onChange(lang.value)}
            className="w-56 cursor-pointer hover:bg-[#B24703]/90 hover:text-[#CB9B8E] focus:bg-[#B24703]/90 focus:text-[#CB9B8E] px-4 py-2 rounded-sm"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
