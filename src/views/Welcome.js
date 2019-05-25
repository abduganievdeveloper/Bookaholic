import React from 'react'
import Navbar from '../MyComponents/Navbar'
import Login from '../MyComponents/Login'

const Welcome=(props)=>{
    
    return(<div>
        <Login setLogin={props.setLogin}/>
        </div>
    )
}

export default Welcome