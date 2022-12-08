import React from "react"
import SignIn from "./SignIn"
import LogOut from "./LogOut"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

function NavBar() {
  const [user] = useAuthState(auth)

  return (
    <div>
      <h1>ChatRoom</h1>
      {user ? <LogOut /> : null}
    </div>
  )
}

export default NavBar
