import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, { useState } from "react"
import { auth, db } from "../firebase"

import { Input, Button, Spacer, Card, Row } from "@nextui-org/react"

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
      <Spacer />
      <Card.Divider />
      <Row justify='center' align='center'>
        <Input
          css={{ marginTop: "5px" }}
          clearable
          size='lg'
          type='text'
          aria-labelledby='message-input'
          placeholder='Aa'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <Button shadow color='success' size='sm' type='submit'>
          Send
        </Button>
      </Row>
    </form>
  )
}

export default SendMessage
