import React from 'react';
import Challenged from './Challenge';

const QualCard = ({ qual, isChallenged, onAddToChallenge }) => {    
    return (
        <div class="">
            <h2 class="name">{qual.name}</h2>
            <Challenged isChallenged={isChallenged} onAddToChallenge={onAddToChallenge} qual={qual}/>
            <div class="pics">
                <div class="pic">
                    <img class="flag" src={qual.flag} alt=""/>
                    <p class="world">{qual.world}</p>
                </div>
                <div class="pic">
                    <img class="photo" src={qual.pic} alt=""/>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default QualCard;