import type { FC } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { To } from "react-router-dom";

type IconButtonProps = {
  to: To;
};

const IconButton: FC<IconButtonProps> = ({ to }) => {
  return (
    <Link
      to={to}
      aria-label="Open in new tab"
      className="w-10 md:w-16 aspect-square rounded-full p-[1px] bg-gradient-to-r from-[#F2933D] to-[#8F58E6] inline-flex items-center justify-center"
    >
      <div className="w-full h-full rounded-full bg-[#F2933D] hover:bg-[#111111] flex items-center justify-center transition-colors duration-200 group">
        <ExternalLink className="text-[#8F58E6] group-hover:text-[#FEFEFE] w-4 h-4 md:w-6 md:h-6 transition-colors duration-200" />
      </div>
    </Link>
  );
};

export default IconButton;
