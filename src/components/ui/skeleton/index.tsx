interface ISkeleton {
  className?: string;
  width?: string;
  height?: string;
}

const Skeleton = ({ className, width = "100px", height = "20px" }: ISkeleton) => {
  return (
    <div
      className={`bg-gray-300 rounded-md animate-pulse ${className}`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
