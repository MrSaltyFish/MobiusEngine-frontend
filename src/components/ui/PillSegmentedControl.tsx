import { useState } from "react";

const PillSegmentedControl = () => {
  const [selected, setSelected] = useState<1 | 2>(1);

  return (
    <div className="relative rounded-full">
      {/* Gradient border layer */}
      <div
        className="absolute inset-0 rounded-full p-[2px]"
        style={{
          background: "linear-gradient(to right, #F2933D, #8F58E6)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>

      {/* Content layer */}
      <div
        className="relative flex rounded-full overflow-hidden select-none backdrop-blur-[31.3px]"
        style={{
          backgroundColor: "rgba(242, 147, 61, 0.2)", // 20% orange
          padding: "2px", // simulate internal space
        }}
      >
        <button
          type="button"
          onClick={() => setSelected(1)}
          className={`px-8 py-2 font-semibold rounded-full transition-colors duration-200 ${
            selected === 1
              ? "bg-[#F2933D] text-black"
              : "bg-transparent text-white hover:bg-white hover:bg-opacity-10"
          }`}
        >
          Section 1
        </button>

        <button
          type="button"
          onClick={() => setSelected(2)}
          className={`px-8 py-2 font-semibold rounded-full transition-colors duration-200 ${
            selected === 2
              ? "bg-[#F2933D] text-black"
              : "bg-transparent text-white hover:bg-white hover:bg-opacity-10"
          }`}
        >
          Section 2
        </button>
      </div>
    </div>
  );
};

export default PillSegmentedControl;
