import React, {useState} from 'react'
import context from './UserContext'

function UserContextProvider({children}) {


    const [user, setUser] = useState(null)
return(
    <context.Provider value={{user, setUser}}>
    {children}
    </context.Provider>


)
}

export default UserContextProvider
