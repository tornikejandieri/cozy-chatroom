import React from "react"
import { auth } from "../firebase"

function LogOut() {
  const signOut = () => {
    signOut(auth)
  }

  return <button onClick={() => auth.signOut()}>👻 out</button>
}

export default LogOut
