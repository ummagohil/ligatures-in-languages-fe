import InputText from "./components/input";
import { Language } from "./components/language";
import Result from "./components/result";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
      <h1 className="text-[#F9F2D6] font-bold text-3xl mb-8 text-center">
        Ligatures in Languages
      </h1>
      <div className="w-full max-w-2xl px-24">
        <div className="flex items-center gap-4 mb-4 w-full">
          <div className="w-full">
            <Language />
          </div>
          <div className="w-full">
            <Language />test
          </div>
        </div>
        <div className="w-full mb-4">
          <InputText />
        </div>
        <div className="w-full">
          <Result />
        </div>
      </div>
    </div>
  );
}
