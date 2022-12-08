import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import React, { useEffect, useRef, useState } from "react"
import { db } from "../firebase"
import ChatMessage from "./ChatMessage"
import SendMessage from "./SendMessage"

function Chat() {
  const [messages, setMessages] = useState([])
  const scroll = useRef()

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <main style={{ position: "relative" }}>
        {messages &&
          messages.map((message) => {
            return <ChatMessage key={message.id} message={message} />
          })}

        <SendMessage scroll={scroll} />
      </main>
    </>
  )
}

export default Chat
