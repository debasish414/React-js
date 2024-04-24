import React, { useState, useContext } from 'react'
import context from '../context/UserContext'

export default function Login() {
    const [user, setuser] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(context)

    const handleEvent = (e) => {
        e.preventDefault()
        setUser({ user, Password })
        console.log(user, Password);
    }
    return (
        <div>
            <h2>Login</h2>
            <input  value={user}
                onChange={(e) => setuser(e.target.value)}
                type="text" placeholder='User Name' className= 'p-4 m-6' />
            <input value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="text" placeholder='Password' />
            <button onClick={handleEvent}>Submit</button>
        </div>
    )
}
