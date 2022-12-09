import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import React from "react"
import GoogleButton from "react-google-button"
import { auth } from "../firebase"

import { Card, Text } from "@nextui-org/react"

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

function SignIn() {
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
        Cozy Chatroom
      </Text>
      <Card
        isHoverable
        variant='bordered'
        css={{ mw: "400px", marginTop: "200px", marginBottom: "150px" }}
      >
        <Card.Body>
          <GoogleButton onClick={googleSignIn} />
        </Card.Body>
      </Card>
    </>
  )
}

export default SignIn
