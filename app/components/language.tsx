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

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export function Language() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between bg-[#B24703] text-[#F9F2D6] border-none hover:bg-[#B24703]/90 hover:text-[#CB9B8E]"
        >
          {selectedItem
            ? items.find((item) => item.value === selectedItem)?.label
            : "Select an item"}
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
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onSelect={() => setSelectedItem(item.value)}
            className="w-56	cursor-pointer hover:bg-[#B24703]/90 hover:text-[#CB9B8E] focus:bg-[#B24703]/90 focus:text-[#CB9B8E] px-4 py-2 rounded-sm"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
