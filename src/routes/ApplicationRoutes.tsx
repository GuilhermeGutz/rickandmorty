import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Loading from "./Loading"

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/loading" element={<Loading/>}/>
    </Routes>
  )
}
