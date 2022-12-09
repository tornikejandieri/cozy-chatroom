import React from "react"
import NavBar from "./NavBar"
import SendMessage from "./SendMessage"

function ChatLayout({ children, scroll }) {
  return (
    <>
      <NavBar />
      {children}
      <SendMessage scroll={scroll} />
    </>
  )
}

export default ChatLayout
