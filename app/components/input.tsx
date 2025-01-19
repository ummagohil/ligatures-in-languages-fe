import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputText() {
  return (
    <div className="flex w-full items-center gap-2">
      <Input
        type="text"
        className="flex-grow p-2 rounded bg-[#B24703] text-[#F9F2D6] placeholder:text-[#F9F2D6] placeholder:opacity-100 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Input text here..."
      />
      <Button
        type="submit"
        className="bg-[#F9F2D6] text-[#859978] hover:bg-[#F9F2D6]/90"
      >
        Translate
      </Button>
    </div>
  );
}
