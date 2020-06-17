import React from 'react';
import Challenged from './Challenge';

const SameName = ({ userCharacter, qual, isChallenged, onAddToChallenge }) => {
    if(userCharacter.name === qual.name) {

        return <p class="selfwarning">Hey {userCharacter.name}! Sorry, but you can't challenge yourself.</p>
    }
    else {
        return (
            <Challenged isChallenged={isChallenged} onAddToChallenge={onAddToChallenge} qual={qual}/>
        )
    }
}

export default SameName;