interface IRepeater {
  count: number;
  element: React.ReactNode;
  className?:string
}

const Repeater = ({ count, element,className }: IRepeater) => {
  return <div className={`${className}`} >{Array.from({ length: count }, (_, i) => <span key={i}>{element}</span>)}</div>;
};

export default Repeater