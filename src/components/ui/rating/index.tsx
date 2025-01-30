import { FaRegStar, FaStar } from "react-icons/fa6";
import Repeater from "../../repeater";
type IRatingType = "default"|"filled"

interface IRating{
    type?:IRatingType
    number:number
    className ?:string
}

const Rating = ({type ="default",number,className}:IRating) => {

  const roundNumber = (a:number):number=>{
    return Math.round(a)
  }


  const star = type == "default" ? <FaRegStar size={24} className={`${className} cursor-pointer`}/> : <FaStar className={`${className} cursor-pointer`} size={24}/>


  return (
    <div>
        <Repeater 
            count={roundNumber(number)} 
            element={star} 
            className="flex gap-1 items-center"
            />
    </div>
  )
}

export default Rating
