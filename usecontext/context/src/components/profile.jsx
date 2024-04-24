import React, {useContext} from 'react'
import context from '../context/UserContext'
import Demo from './Demo'

export default function Profile() {
    const {user} = useContext(context)

    if(!user){
        return <div>Please Login</div>
    }else{
            return <>
            <Demo/>
            </>

        }

}
