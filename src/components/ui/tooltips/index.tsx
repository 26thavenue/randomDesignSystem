import React, { useState } from "react";

interface ITooltip {
  text: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "hover" | "click";
  className?: string;
}

const Tooltip = ({ text, children, position = "top", trigger = "hover", className }: ITooltip) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === "hover") setVisible(true);
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") setVisible(false);
  };

  const handleClick = () => {
    if (trigger === "click") setVisible((prev) => !prev);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Child Element */}
      {children}

      {/* Tooltip */}
      {visible && (
        <span
          className={`absolute z-10 w-max bg-gray-800 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-200 ${className}
            ${position === "top" ? "bottom-full  -translate-x-1/2 mb-1" : ""}
            ${position === "bottom" ? "top-full  -translate-x-1/2 mt-1" : ""}
            ${position === "left" ? "right-full top-1/2 -translate-y-1/2 mr-1" : ""}
            ${position === "right" ? "left-full top-1/2 -translate-y-1/2 ml-1" : ""}
          `}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
