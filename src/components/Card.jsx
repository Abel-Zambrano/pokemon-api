import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">          
            <div className="card">
                <h2>{props.name}</h2>
                <img src={props.img} alt=""/>
                <p>{props.type}</p>
                <p>{props.health}</p>
                <p>{props.ability}</p>
            </div>
            <div className='btn-container'>
                <button className='fetch-btn'>Fetch Card</button> 
            </div>     
        </div>
    )
}
    
export default Card;