import React from "react"
import LogOut from "./LogOut"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Text } from "@nextui-org/react"

function NavBar() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight='bold'
      >
        ChatRoom
      </Text>
      {user ? <LogOut /> : null}
    </>
  )
}

export default NavBar
