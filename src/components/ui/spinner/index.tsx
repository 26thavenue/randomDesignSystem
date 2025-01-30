interface ISpinner {
  size?: string;
  color?: string;
  className?: string;
}

const Spinner = ({ size = "24px", color = "gray", className }: ISpinner) => {
  return (
    <div
      className={`border-4 border-${color}-600 border-t-transparent rounded-full animate-spin ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Spinner;
