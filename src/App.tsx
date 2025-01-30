import { Chips } from "./components"


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
    </div>  
  )
}

export default App
