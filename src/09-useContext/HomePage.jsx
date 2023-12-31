import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Homepage = () => {
   
   const {user}= useContext(UserContext)
     return (
    <>
         <h1>Homepage <small>{user?.name}</small> </h1>
    <hr />

    <pre>
     {JSON.stringify(user,null,3)}
</pre>

    </>
    )
  }