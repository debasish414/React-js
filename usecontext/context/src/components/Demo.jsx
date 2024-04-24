import React, {useContext} from 'react'
import context from '../context/UserContext'

export default function Demo() {
    const {user} = useContext(context)

  return (
    < >
        <div className='cont'>
            <h1>Welcome to my web mr/mrs {user.user}</h1>
        </div>
    </ >
  )
}
