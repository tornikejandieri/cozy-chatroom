import NavBar from "./components/NavBar"
import Chat from "./components/Chat"

import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import SignIn from "./components/SignIn"

function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className='App'>
      <section>
        <NavBar />
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  )
}

export default App
