import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

type ChipsVariant = "default" | "input" | "filter" | "option" ;

interface IChips {
  children?: React.ReactNode;
  variants?: ChipsVariant;
  className?: string;
  onClick?: () => void;
  color?: string;
  disabled?: boolean;
}

const Chips = ({
  children,
  variants = "default",
  className = "",
  color = "blue", // Default color
  disabled = false,
  onClick,
}: IChips) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (variants === "filter" || variants === "option") {
      setActive((prev) => !prev);
    }

    if (onClick) {
      onClick();
    }
  };

  const variantClasses: Record<ChipsVariant, string> = {
    default: `bg-${color}-700 text-white`,
    input: `bg-[#fefefe] border border-gray-200 text-black`,
    filter: ` transition-all text-black ${active ? `border border-${color}-300 bg-blue-50 `: "border border-gray-200 "}`,
    option: ` ${active ? `border-${color}-300 bg-blue-50 border` : "border border-gray-200"}`,
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={` ${variantClasses[variants]} ${className} max-w-fit px-[12px] py-[6px] flex gap-3 items-center rounded-full`}
    >
      {variants === "filter" && active && <FaCheck className={`text-${color}-900`}/>}
      {children}
      {variants === "input" && <IoClose />}
    </button>
  );
};

export default Chips;
