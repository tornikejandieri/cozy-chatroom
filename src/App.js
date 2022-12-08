import NavBar from "./components/NavBar"
import Chat from "./components/Chat"

import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"

function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className='App'>
      <section>
        <NavBar />
        <Chat />
      </section>
    </div>
  )
}

export default App
