import React from 'react';

const QualCard = ({ qualifiers }) => {    
    return (
        <>
            <p>{qualifiers.name}</p>
            <img src={qualifiers.flag} alt=""/>
            <p>{qualifiers.world}</p>
            <img src={qualifiers.pic} alt=""/>
            <hr></hr>
        </>
    )
}

export default QualCard;