import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, { useState } from "react"
import { auth, db } from "../firebase"

import { Input, Spacer, Card, Row } from "@nextui-org/react"
import { SendButton } from "./SendButton"
import { SendIcon } from "./SendIcon"

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
          autoFocus
          size='lg'
          type='text'
          aria-labelledby='message-input'
          placeholder='Aa'
          contentRightStyling={false}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          contentRight={
            <SendButton>
              <SendIcon />
            </SendButton>
          }
        />
      </Row>
    </form>
  )
}

export default SendMessage
