import { Chips } from "./components"
import { LuListFilter } from "react-icons/lu";

function App() {

  return (
    <div className="px-20 py-40 flex flex-col gap-8">
      <Chips
        variants ="outline"
      >
        Suggestion
      </Chips>
      
      <Chips
        variants ="outline"
        className="rounded-md"
      >
        <LuListFilter/>
        Filter
        
      </Chips>

      <Chips
        variants ="withbg"
      >
        Suggestion
      </Chips>
    </div>  
  )
}

export default App
