import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import playerData from './data/data.json'
import Player from './Player/Player';
import Detail from './Detail/Detail';
import Salary from './Salary/Salary';

function App() {
 const[players,setPlayers]=useState([])
 const [show,setShow]=useState([])
   useEffect(()=>{
    setPlayers(playerData)
    console.log(playerData)
   },[])
 
   const handlePlayer=(information)=>{
    const newInfo=[...show,information]
    setShow(newInfo)
   }

  return (
    <div >
      
         {/* <Detail detail={show}></Detail> */}

      {/* button a click korle  proti player ar jonno alada detail ata use korete hobe dakhate  */}
      {
        show.map(show=> <Detail detail={show}></Detail>)
      }
      <Salary salary={show} ></Salary>
    
      {
        players.map(plyr=>  <Player  player={plyr} handlePlayer={handlePlayer} ></Player>)
      }
      
    </div>
  );
}

export default App;
