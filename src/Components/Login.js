import React from 'react';

const Login = ({ userCharacter, userFlag }) => {    
    return (
        <div class="loginshape">
            <h2 class="loginname">You're logged in as {userCharacter.name}!</h2>
            <div class="pic">
                <div class="pic">
                    <img class="loginpic" src={userCharacter.pic} alt=""/>
                    <img class="loginpic" src={userFlag.flag} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Login;