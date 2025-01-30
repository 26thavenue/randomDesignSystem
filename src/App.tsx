import { Chips,Badges,Avatar,Divider, Rating,Skeleton, Spinner ,Tabs} from "./components"
import { FiMail } from "react-icons/fi";
import { TbProgress } from "react-icons/tb"
import { FaShippingFast } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { TbCancel } from "react-icons/tb";

function App() {

  return (
    <div className="px-20 py-40 flex flex-col gap-8">
      <Chips
      >
        Suggestion
      </Chips>
      
      <Chips
      variants="filter"
      >
        Prototyping 
      </Chips>

      <Chips
       variants="option"
      >
        Suggestion
      </Chips>

      <Chips
       variants="input"
      >
        Suggestion
      </Chips>
      

      <div className="relative p-1 max-w-fit">
        {/* <p className=" px-5 py-3 rounded-full bg-red-600 text-white">A</p> */}
        <FiMail size={24}/>
        <Badges number="2"/>
      </div>

      <Avatar type="picture"/>
      <Divider/>
      <Rating 
        number= {6.72}
      />
      <Skeleton/>
      <Spinner color="purple"/>
      <Tabs
        tabs ={[
          <span className="flex items-center gap-2 ">
            <TbProgress/>
            In Progress
            </span>,
          <span className="flex items-center gap-2 ">
            <FaShippingFast/>
            Shipping Now
            </span>,
          <span className="flex items-center gap-2 ">
            <MdSchedule/>
            Scheduled
            </span>,
          <span className="flex items-center gap-2 ">
            <TbCancel/>
            Canceled
            </span>,
        ]}
      />

      
    </div>  
  )
}

export default App
