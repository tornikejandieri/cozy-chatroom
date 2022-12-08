import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, { useState } from "react"
import { auth, db } from "../firebase"

function SendMessage({ scroll }) {
  const [inputText, setInputText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputText) {
      const { uid, displayName } = auth.currentUser
      await addDoc(collection(db, "messages"), {
        text: inputText,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      })
      setInputText("")
      scroll.current.scrollIntoView({ behaviour: "smooth" })
    } else {
      alert("Please input a message")
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Aa'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  )
}

export default SendMessage
