import React, { useState } from 'react';
import Dice from './Dice';

const Table = () => {
    const number = ["one","two","three","four","five","six"];

    const[diceNum, setDiceNum] = useState("");
    const[diceNumTwo, setDiceNumTwo] = useState("");

    const handleRoll = e =>{
        e.preventDefault();

        let index = Math.floor(Math.random()*6);
        setDiceNum(number[index]);

        let indexTwo = Math.floor(Math.random()*6);
        setDiceNumTwo(number[indexTwo]);
    }

    return ( 
        <>
            <Dice diceNum ={diceNum}/>
            <Dice diceNum ={diceNumTwo}/>
            <button onClick={handleRoll}>Roll</button>
        </> 
    );
}
 
export default Table;