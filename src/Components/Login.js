import React from 'react';

const Login = ({ userCharacter }) => {    
    return (
        <div class="loginshape">
            <h2 class="loginname">You're logged in as {userCharacter.name}!</h2>
            <div class="pic">
                <div class="pic">
                    <img class="loginpic" src={userCharacter.pic} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Login;