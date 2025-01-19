import { Button } from "./components"
import { MdOutlineFileDownload, MdOutlineFilterList} from "react-icons/md";

function App() {

  return (
    <div className="px-20 py-40">
     {/* <p>Random Design Component</p> */}
     <Button
      bgColor="#000" 
      variant ="primary"
      className="rounded-full shadow-sm"
      iconLeft={<MdOutlineFileDownload/>}
     >
      Download
    </Button>

    <Button
      bgColor="#000" 
      variant ="secondary"
      className="rounded-md my-10  shadow-custom2"
      iconLeft={<MdOutlineFilterList/>}
     >
      Filter
    </Button>

    <Button
      bgColor="#000" 
      variant ="secondary"
      className="rounded-md my-10  shadow-custom-outline"
      // iconLeft={<MdOutlineFilterList/>}
     >
      Cancel
    </Button>
    </div>
  )
}

export default App
