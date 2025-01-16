import InputText from "./components/input";
import { Language } from "./components/language";
import Result from "./components/result";

export default function Home() {
  return (
    <div className="px-32 justify-center">
      <div className="flex w-full max-w-3xl items-center space-x-4 mb-4">
        <InputText />
        <Language />
      </div>
      <div className="w-full max-w-3xl">
        <Result />
      </div>
    </div>
  );
}
