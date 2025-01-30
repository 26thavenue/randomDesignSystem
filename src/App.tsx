import { Chips,Badges,Avatar,Divider, Rating,Skeleton } from "./components"
import { FiMail } from "react-icons/fi";


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
    </div>  
  )
}

export default App
