import type { FC } from "react";

type TextButtonProps = {
  text: string;
  theme?: "black" | "orange-purple";
  onClick?: () => void;
  className?: string;
};

const TextButton: FC<TextButtonProps> = ({
  text,
  theme = "black",
  onClick,
  className = "",
}) => {
  // Common base styles for button container with border gradient
  const baseClasses =
    "w-[250px] h-[72px] md:w-[250px] md:h-[72px] rounded-lg p-[1px] bg-gradient-to-r from-[#F2933D] to-[#8F58E6]";

  // Theme-based inner button styles
  const themes = {
    black:
      "bg-[#111111] text-white hover:bg-[#F2933D] hover:text-[#8F58E6] transition-colors duration-200",
    "orange-purple":
      "bg-[#F2933D] text-[#8F58E6] hover:bg-[#111111] hover:text-[#FEFEFE] transition-colors duration-200",
  };

  return (
    <div className={`${baseClasses} inline-block ${className}`}>
      <button
        onClick={onClick}
        className={`w-full h-full rounded-lg font-semibold text-lg md:text-xl flex items-center justify-center ${themes[theme]}`}
      >
        {text}
      </button>
    </div>
  );
};

export default TextButton;
