import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Register from "./Component/Register/Register"
import '../src/Component/Common/LoginRegister.css'
import Login from "./Component/Login/Login"
import app from "./firebase.config"
const App = () => {
  const myroute= createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Register/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
