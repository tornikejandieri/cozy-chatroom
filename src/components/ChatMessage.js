import React from "react"
import { auth } from "../firebase"

import { Card, Text } from "@nextui-org/react"

function ChatMessage({ message, scroll }) {
  //   message.uid === auth.currentUser.uid ?
  scroll.current.scrollIntoView({ behaviour: "smooth" })
  if (message.uid === auth.currentUser.uid) {
    return (
      <div>
        <div>
          <Card
            isHoverable
            variant='bordered'
            css={{
              mw: "240px",
              marginLeft: "120px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Card.Body>
              <Text h6 size={15}>
                {message.name}
              </Text>
              <Card.Divider />
              <p>{message.text}</p>
            </Card.Body>
          </Card>
        </div>
        <div ref={scroll}></div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Card
          isHoverable
          variant='bordered'
          css={{
            mw: "240px",
            margin: "5px",
            backgroundColor: "$purple300",
          }}
        >
          <Card.Body>
            <Text h6 size={15}>
              {message.name}
            </Text>
            <Card.Divider />
            <p>{message.text}</p>
          </Card.Body>
        </Card>
      </div>
      <div ref={scroll}></div>
    </div>
  )
}

export default ChatMessage
