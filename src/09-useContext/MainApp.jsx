import { Routes,Route,Navigate,Link } from "react-router-dom"
import { Homepage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
  <UserProvider>
  {/* <h1>Main - APP </h1> */}
  <NavBar />
  <hr />
<Routes>
    <Route path="/" element={<Homepage/>}/>   
    <Route path="Login" element={<LoginPage/>}/>   
    <Route path="About" element={<AboutPage/>}/>   
    {/* <Route path="/*" element={<LoginPage/>}/>    */}
    <Route path="/*" element={ < Navigate  to="/About"/>}/>   
</Routes>

  </UserProvider>
  )
}
