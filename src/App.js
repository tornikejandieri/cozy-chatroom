import { NextUIProvider } from "@nextui-org/react"

import NavBar from "./components/NavBar"
import Chat from "./components/Chat"

import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import SignIn from "./components/SignIn"

import { Container, Card, Row, Text } from "@nextui-org/react"

function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <NextUIProvider>
      <Container>
        <Card css={{ $$cardColor: "$colors$primary" }}>
          <Row justify='center' align='center'>
            <Text h6 size={15} color='white' css={{ m: 0 }}>
              <div className='App'>
                <section>
                  <NavBar />
                  {user ? <Chat /> : <SignIn />}
                </section>
              </div>
            </Text>
          </Row>
        </Card>
      </Container>
    </NextUIProvider>
  )
}

export default App
