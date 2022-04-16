import React, { useEffect, useState } from 'react';
import Dice from './Dice';
import Score from './Score';

const Table = () => {
    const number = ["one","two","three","four","five","six"];

    const[diceNum, setDiceNum] = useState("");
    const[diceNumTwo, setDiceNumTwo] = useState("");
    const[result,setResult] = useState([]);
    let[counter1,setCounter1] = useState(0);
    let[counter2,setCounter2] = useState(0);

    const handleRoll = e =>{
        e.preventDefault();

        let index = Math.floor(Math.random()*6);
        setDiceNum(number[index]);

        let indexTwo = Math.floor(Math.random()*6);
        setDiceNumTwo(number[indexTwo]);

        setResult([...result,index + indexTwo + 2])
    }


    useEffect(()=>{
        if(result.length === 2){

            if (result[0]>result[1]) {
                setCounter1(counter1+1)
            }
            else if (result[1]>result[0]) {
                setCounter2(counter2+1)
            }
            else{
                console.log("=");
            }
            setResult([]);
        }

        if(counter1 === 5 || counter2 === 5){
            setCounter1(0);
            setCounter2(0);
        }
        
    },[result])

    console.log(result,counter1,counter2);

    return ( 
        <>
            <Dice diceNum ={diceNum}/>
            <Dice diceNum ={diceNumTwo}/>
            <button onClick={handleRoll}>Roll</button>
            <Score counter1={counter1} counter2={counter2}/>
        </> 
    );
}
 
export default Table;