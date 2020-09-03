import React from 'react'
import './Login.css';

function Login(){
    return(
        <div className="Login">
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
                    <a href="#">Password Forgotten?</a><br></br>
                    <a href="#">Create an account.</a>



                
                </form>
                    


                
            </div>
        </div>
    )
};

export default Login;