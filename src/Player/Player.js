import React from 'react';
import './Player.css';
const Player = (props) => {
  
    const handlePlayer=props.handlePlayer
    const {img,name,salary}=props.player
    return (
        <div className='player'>
            <div>
                    <img src={img} alt="" />
            </div>
            <div className='details'>
                    <h4>name: {name}</h4>
                    <p>salary:{salary}</p>
                    <button onClick={()=>handlePlayer(props.player)}>add player</button>
            </div>
        </div>
    );
};

export default Player;