import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DrawStage from './DrawStage';

const SelectTeams = () => {
    const [teams,setTeams] = useState([]);
    let tier1 = [];
    let tier2 = [];
    let tier3 = [];
    let tier4 = [];


    const getTeams = async ()=>{
        let list =await axios.get("https://restcountries.com/v3.1/all")
        setTeams(list.data)
    }

    const handleTier = () =>{
        teams.map(el=>{
            if(el.cca3 === "BRA" || el.cca3 === "BEL" || el.cca3 === "FRA" || el.cca3 === "ARG" || el.cca3 === "GBR" || el.cca3 === "ITA" || el.cca3 === "ESP" || el.cca3 === "PRT" || el.cca3 === "MEX" || el.cca3 === "NLD" || el.cca3 === "DNK" || el.cca3 === "DEU"){
                tier1.push(el);
            }else if(el.cca3 === "URY" || el.cca3 === "CHE" || el.cca3 === "USA" || el.cca3 === "HRV" || el.cca3 === "COL" || el.cca3 === "SWE" || el.cca3 === "SEN" || el.cca3 === "IRN" || el.cca3 === "PER" || el.cca3 === "JPN" || el.cca3 === "MAR"){
                tier2.push(el);
            }else if(el.cca3 === "SRB" || el.cca3 === "POL" || el.cca3 === "UKR" || el.cca3 === "CHL" || el.cca3 === "KOR" || el.cca3 === "NGA" || el.cca3 === "CRI" || el.cca3 === "EGY" || el.cca3 === "CZE" || el.cca3 === "AUT" || el.cca3 === "TUN" || el.cca3 === "RUS" || el.cca3 === "CMR" || el.cca3 === "CAN" ||  el.cca3 === "HUN" || el.cca3 === "NOR" || el.cca3 === "AUS"|| el.cca3 === "TUR" || el.cca3 === "DZA" || el.cca3 === "SVK"){
                tier3.push(el);
            }else if(el.cca3 === "ECU" || el.cca3 === "IRL" || el.cca3 === "ROU" || el.cca3 === "SAU" || el.cca3 === "PRY" || el.cca3 === "QAT" || el.cca3 === "MLI" || el.cca3 === "CIV" ||  el.cca3 === "GRC" || el.cca3 === "BFA" || el.cca3 === "FIN" || el.cca3 === "VEN" || el.cca3 === "BIH" || el.cca3 === "GHA" || el.cca3 === "PAN" || el.cca3 === "MKD" || el.cca3 === "ISL" || el.cca3 === "JAM"){
                tier4.push(el);
            }
        })
    }
    

    useEffect(()=>{
        getTeams();
    },[])

    return ( 
       <>
        <button onClick={()=> handleTier()}>start</button>
        <DrawStage tier1 ={tier1} tier2 ={tier2} tier3 ={tier3} tier4 ={tier4} />
       </>
     );
}
 
export default SelectTeams;