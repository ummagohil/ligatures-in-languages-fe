import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputText() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Input text here..." />
      <Button type="submit">Translate</Button>
    </div>
  );
}
