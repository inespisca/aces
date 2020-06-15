import React from 'react';

const QualCard = ({ qualifiers }) => {    
    return (
        <div class="">
            <h2 class="name">{qualifiers.name}</h2>
            <div class="pics">
                <div class="pic">
                    <img class="flag" src={qualifiers.flag} alt=""/>
                    <p class="world">{qualifiers.world}</p>
                </div>
                <div class="pic">
                    <img class="photo" src={qualifiers.pic} alt=""/>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default QualCard;