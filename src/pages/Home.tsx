import { Button } from "../components"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate= useNavigate()

  const onClick = () =>{
     navigate("/docs")
  }
  return (
    <div className="p-6 flex flex-col items-center justify-center w-full h-[100vh] bg-orange-200">
      <h1 className="text-3xl lg:text-6xl my-6 font-bold">Random design System</h1>
      <Button className="rounded-full " onClick={onClick} variant="primary"> Explore our documentation</Button>
    </div>
  )
}

export default Home