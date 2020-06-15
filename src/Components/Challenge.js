import React from 'react';
import constants from './constants';

const Challenged = ({ isChallenged, onAddToChallenge, qual }) => {
    if(isChallenged) {

        return <button onClick={() => onAddToChallenge(qual, constants.CHAL)} className="remoChal">Remove Challenge</button>
    }
    return <button onClick={() => onAddToChallenge(qual, constants.CHAL)} className="addChal">Challenge to a Buddyfight!</button>
}

export default Challenged;