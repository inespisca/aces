import React from 'react';

const ChooseCharacter = ({ userCharacter, selectCharacter, userFlag, selectFlag, Link }) => {
    return (
        <div className="CharacterSelectionContainer">
            <p class="PickText">Please pick a character and then click on the "Yes!" button that will appear to pick your next opponent.</p>
            <div className="PickingChar">
                <h1>Pick your character</h1>
                <div class="box">
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
                <h1>Pick your world</h1>
                <div class="box">
                    <select onChange={selectFlag} >
                        <option value="">Please select...</option>
                        <option value="Dragon World">Dragon World</option>
                        <option value="Katana World">Katana World</option>
                        <option value="Magic World">Magic World</option>
                        <option value="Lost World">Lost World</option>
                        <option value="Ancient World">Ancient World</option>
                        <option value="Star Dragon World">Star Dragon World</option>
                        <option value="Legend World">Legend World</option>
                        <option value="Darkness Dragon World">Darkness Dragon World</option>
                    </select>
                </div>
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
                userCharacter.name && <div className="PickButton"><nav><ul><li><Link to="/challenge"><p class="yesbtn">Yes!</p></Link></li></ul></nav></div>
            }
        </div>
    )
};

export default ChooseCharacter;
