import React from 'react'
import './Login.css';

function Login(){
    return(
        <div className="Login">
            <h1>Hello</h1>
            
            <link rel="stylesheet" href="Login.css"></link>
            <form id="login-form">
                <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username"></input>
                <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password"></input>
                <input type="submit" value="Login" id="login-form-submit"></input>
                
            </form>
        </div>
    )
};

export default Login;