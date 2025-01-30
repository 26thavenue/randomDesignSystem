interface IBadges {
  number?: string;
  color?: string;
}

const Badges = ({ number, color = "red" }: IBadges) => {
  if (!number) return null; 

  return (
    <div
      className={`absolute top-0 right-0 flex items-center justify-center w-4 h-4 rounded-full bg-${color}-600`}
    >
      <span className="text-[7px] text-white px-1 py-0.5">{number}</span>
    </div>
  );
};

export default Badges;
