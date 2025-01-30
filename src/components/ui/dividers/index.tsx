interface IDivider {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Divider = ({ orientation = "horizontal", className }: IDivider) => {
  return (
    <div
      className={`bg-gray-300 ${orientation === "horizontal" ? "w-full h-[2px] my-2" : "h-full w-[2px] mx-2"} ${className}`}
    />
  );
};

export default Divider;
