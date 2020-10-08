import React from 'react'
import NavigationBar from './NavBar'
import './Login.css';

function Login(){
    return(
        <div className="Login">
            <NavigationBar></NavigationBar>

            <h1>Login Here</h1>
            
            <link rel="stylesheet" href="Login.css"></link>

            <div class="loginbox">
                <img src="userlogo.png" class="userlogo" alt ="userLogo" ></img>
                <form id="login-form">
                    <p>Username</p>
                    <input type="type" name="" placeholder="Enter Username"></input>
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password"></input>
                    <input type="submit" name="" value="Login"></input>
                </form>
            </div>
        </div>
    )
};

export default Login;

/*<a href="#">Password Forgotten?</a><br></br>
                    <a href="#">Create an account.</a>*/