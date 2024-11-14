import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvieder from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvieder>
           <h1>React video for context API</h1>
          <Login/>
      <Profile/>
    </UserContextProvieder>
  )
}

export default App
