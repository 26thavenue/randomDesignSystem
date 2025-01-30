import { useState } from "react";



interface ITabs {
  tabs: React.ReactNode[];
  color?: string;
  className?: string;
}

const Tabs = ({ tabs, color = "blue", className }: ITabs) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`flex items-center gap-6 border-b-2 border-gray-300 ${className}`}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`relative px-4 py-3 transition-all duration-300 
            ${activeIndex === index ? `text-${color}-500 border-b-2 border-${color}-500`: "text-gray-500 border-b-2 border-transparent"}
          `}
          onClick={() => setActiveIndex(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
