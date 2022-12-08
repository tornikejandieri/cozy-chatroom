import React from "react"
import { auth } from "../firebase"

function ChatMessage({ message }) {
  const styleLeft = {
    display: "flex",
    flexDirection: "flex-end",
  }
  const styleRight = {
    display: "flex",
    flexDirection: "flex-start",
  }

  const messageClass =
    message.uid === auth.currentUser.uid ? `${styleLeft}` : `${styleRight}`

  return (
    <div>
      <div className={`${messageClass}`}>
        <p>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

export default ChatMessage
