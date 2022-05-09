import React, {useEffect, useState} from 'react';

const DrawStage = ({tier1,tier2,tier3,tier4}) => {
    const [hat1,setHat1] = useState([]);
    const [hat2,setHat2] = useState([]);
    const [hat3,setHat3] = useState([]);
    const [hat4,setHat4] = useState([]);

    const [groupA, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);
    const [groupC, setGroupC] = useState([]);
    const [groupD, setGroupD] = useState([]);
    const [groupE, setGroupE] = useState([]);
    const [groupF, setGroupF] = useState([]);
    const [groupG, setGroupG] = useState([]);
    const [groupH, setGroupH] = useState([]);

    const handleHats = (arr,setArr) =>{
        let draw = [];

        while(draw.length<8){
            let rand = arr[Math.floor(Math.random()*arr.length)];

            if(!draw.includes(rand)){
                draw.push(rand);
            }
        }

        setArr(draw);
    }

    const qualified = () =>{
        handleHats(tier1,setHat1);
        handleHats(tier2,setHat2);
        handleHats(tier3,setHat3);
        handleHats(tier4,setHat4);
    }

    const writeHat = (arr,hatName) =>{
       return (
        <ul className='hats'>
            <h3>{hatName}</h3>
            {arr.map((el,index)=>{
                return <li key={index}><img style={{height:"15px"}} src={el.flags.png}/>{el.name.common}</li>
            })}
        </ul>
       )
    }

    const sortSystem = (arr) =>{
        let draw = [];

        while(draw.length<8){
            let rand = arr[Math.floor(Math.random()*arr.length)];

            if(!draw.includes(rand)){
                draw.push(rand);
            }
        }
        arr = draw;
        
        arr.map((el,index)=>{
            if(index===0){
                setGroupA(groupA=>[...groupA,el])
            }else if (index === 1) {
                setGroupB(groupB=>[...groupB,el])
            }else if (index === 2) {
                setGroupC(groupC=>[...groupC,el])
            }else if (index === 3) {
                setGroupD(groupD=>[...groupD,el])
            }else if (index === 4) {
                setGroupE(groupE=>[...groupE,el])
            }else if (index === 5) {
                setGroupF(groupF=>[...groupF,el])
            }else if (index === 6) {
                setGroupG(groupG=>[...groupG,el])
            }else if (index === 7) {
                setGroupH(groupH=>[...groupH,el])
            }
        })
    }

    const handleGroups = () =>{
        sortSystem(hat1);
        sortSystem(hat2);
        sortSystem(hat3);
        sortSystem(hat4);
    }

    console.log(groupA,groupB,groupC,groupD,groupE,groupF,groupG,groupH);

    return ( 
            <>
                <button onClick={()=>qualified()}>draw</button>
                {hat1.length === 8 ? writeHat(hat1,"Hat #1"): null}
                {hat2.length === 8 ? writeHat(hat2,"Hat #2"): null}
                {hat3.length === 8 ? writeHat(hat3,"Hat #3"): null}
                {hat4.length === 8 ? writeHat(hat4,"Hat #4"): null}
                <button onClick={()=>handleGroups()}>draw Groups</button>
            </> 

        );
}
 
export default DrawStage;