import React from "react"
import { auth } from "../firebase"
import { Button } from "@nextui-org/react"

function LogOut() {
  const signOut = () => {
    signOut(auth)
  }

  return (
    <Button color='gradient' size='sm' onClick={() => auth.signOut()}>
      👻Log out👻
    </Button>
  )
}

export default LogOut
