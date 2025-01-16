import InputText from "./components/input";
import { Language } from "./components/language";
import Result from "./components/result";

export default function Home() {
  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <InputText />
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Language />
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Result />
      </div>
    </div>
  );
}
