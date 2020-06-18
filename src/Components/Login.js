import React from 'react';

const Login = ({ userCharacter, userFlag }) => {    
    return (
        <div class="loginshape">
            <h2 class="loginname">You're logged in as {userCharacter.name}!</h2>
            <h2 class="loginworld">You're using a {userFlag.worldName} deck.</h2>
            <div class="pic">
                <div class="pic">
                    <img class="loginpic" src={userCharacter.pic} alt=""/>
                    <img class="loginflag" src={userFlag.worldFlag} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Login;