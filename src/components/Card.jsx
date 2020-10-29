import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">          
            <div className="card">
                <h2>{props.name}</h2>
                <img className="poke-img" src={props.img} alt="pokemon"/>
                <div className="poke-stats">
                    <p>Type: {props.type}</p>
                    <p>HP: {props.health}</p>
                    <p>Ability: {props.ability}</p>
                </div>
            </div>
            <div className='btn-container'>
                <button onClick={props.click} className='fetch-btn'>Fetch Card</button> 
            </div>     
        </div>
    )
}
    
export default Card;