import React from 'react';

const ChooseCharacter = ({ userCharacter, selectCharacter, Link }) => {
    return (
        <div className="CharacterSelectionContainer">
            <p>Please pick a character and then click on the "Yes!" button that will appear to pick your next opponent.</p>
            <div className="PickingChar">
                <h1>Pick your character</h1>
                <select onChange={selectCharacter} >
                    <option value="">Please select...</option>
                    <option value="Yuga Mikado">Yuga Mikado</option>
                    <option value="Ranma Kakogawa">Ranma Kakogawa</option>
                    <option value="Masato Rikuo">Masato Rikuo</option>
                    <option value="Subaru Hoshiyomi">Subaru Hoshiyomi</option>
                    <option value="Seiji Kido">Seiji Kido</option>
                    <option value="Daijiro Kurayashiki">Daijiro Kurayashiki</option>
                    <option value="Dan Yamada">Dan Yamada</option>
                    <option value="Eden Hanazono">Eden Hanazono</option>
                    <option value="Rei Urameshi">Rei Urameshi</option>
                </select>
            </div>
            <div className="YourPhoto">
                {
                    userCharacter.name && <img className="nicepic" src={userCharacter.pic} alt=""></img>
                }
            </div>
            <div className="Pick">
                {
                    userCharacter.name && <p className="May">Welcome back, {userCharacter.name}! Are you ready to pick your next opponent?</p>
                }
            </div>
            {
                userCharacter.name && <div className="PickButton"><nav><ul><li><Link to="/challenge"><p>Yes!</p></Link></li></ul></nav></div>
            }
        </div>
    )
};

export default ChooseCharacter;