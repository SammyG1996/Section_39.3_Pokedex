import React from "react";
import "./Pokecard.css"

const Pokecard = ({pokeName, type, exp, img}) => {
    return (
        <div className="Pokecard">
            <h1>{pokeName}</h1>
            <img src={img} alt={pokeName} className="Pokecard-img"/>
            <p><b>Type:</b> {type}</p>
            <p><b>Exp:</b> {exp}</p>
        </div>
    )
}

export default Pokecard;