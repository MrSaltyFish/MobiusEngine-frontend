import type { FC } from "react";
import PillSegmentedControl from "../ui/PillSegmentedControl";

const HeroHeader: FC = () => {
  return (
    <header className="text-white fixed top-0 left-0 w-full z-50 bg-[#111111] shadow-md px-8 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div style={{ width: 320, height: 40 }} className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Center: Pill segmented control */}
      <div className="flex items-center rounded-full border border-gray-300 overflow-hidden select-none">
        <PillSegmentedControl />
      </div>

      {/* Right: Black button */}
      <button
        type="button"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition-colors"
      >
        Login / Signup
      </button>
    </header>
  );
};

export default HeroHeader;
