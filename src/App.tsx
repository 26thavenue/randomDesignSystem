import { Button ,IconButtons} from "./components"
import { MdOutlineFileDownload, MdOutlineFilterList} from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

function App() {

  return (
    <div className="px-20 py-40">
     {/* <p>Random Design Component</p> */}
     <Button
      variant ="primary"
      className="rounded-full shadow-sm"
      iconLeft={<MdOutlineFileDownload/>}
     >
      Download
    </Button>

    <Button 
      variant ="secondary"
      className="rounded-md my-10  shadow-custom2"
      iconLeft={<MdOutlineFilterList/>}
     >
      Filter
    </Button>

    <Button 
      variant ="secondary"
      className="rounded-md my-10  shadow-custom-outline"
      // iconLeft={<MdOutlineFilterList/>}
      loading ={true}
     >
      Loading ...
    </Button>

    <IconButtons
    className={'rounded-md shadow-custom'} 
    variant="primary">
      <IoMdNotifications/>
    </IconButtons>
    </div>
  )
}

export default App
