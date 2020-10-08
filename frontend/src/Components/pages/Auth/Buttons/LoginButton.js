import React from 'react'
import {Link} from 'react-router-dom'

function LoginButton() {
    return (
            <div>
                <Link to= "/login"><button className="nav-link active">Log in</button></Link>
            </div>
        
    )
}

export default LoginButton
