import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import React from "react"
import GoogleButton from "react-google-button"
import { auth } from "../firebase"

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

function SignIn() {
  return (
    <div>
      <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn
