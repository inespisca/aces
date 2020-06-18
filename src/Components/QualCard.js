import React from 'react';
import SameName from './SameName';

const QualCard = ({ qual, isChallenged, userCharacter, onAddToChallenge }) => {    
    return (
        <div class="contain">
            <h2 class="name">{qual.name}</h2>
            <SameName isChallenged={isChallenged} userCharacter={userCharacter} qual={qual} onAddToChallenge={onAddToChallenge}/>
            <div class="pics">
                <div class="pic">
                    <img class="flag" src={qual.flag} alt=""/>
                    <p class="world">{qual.world}</p>
                </div>
                <div class="pic">
                    <img class="photo" src={qual.pic} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default QualCard;