import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-red-700 text-cyan-400'>Hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
