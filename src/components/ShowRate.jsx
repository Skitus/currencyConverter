import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./Main.css";


let flagIndex;

const ShowRate = (props) => {

    const [amountUsd, setAmountUsd] = useState(0);
    const [amountRate, setAmountRate] = useState(0);

    let Exrates = useSelector(({main}) => main.rate);
    let elRate = Exrates.map(el => el.rates);
    let arrKeysRate = [];
    let arrValuesRate = [];
    elRate.forEach(el => arrKeysRate.push(Object.keys(el)));
    elRate.forEach(el => arrValuesRate.push(Object.values(el)));


    const handleClick = (index) => {
        flagIndex = arrValuesRate[0][index];
        setAmountRate(arrValuesRate[0][index]);
        spanRef.current.textContent = arrKeysRate[0][index];
        setAmountUsd((flagIndex / arrValuesRate[0][149]));
    }

    let spanRef = React.createRef();

    return (
        <div className="innerBlock">
            <span>USD : {amountUsd}</span>
            <br/>
            <span>{Exrates.map(el => el.base)} :   <span>{amountRate && amountRate}</span></span>
            <br/>
            <p className="pointRate">Базовый курс : <span ref={spanRef}></span></p>
            <div className="select">
                {
                    arrKeysRate.map((el) => el.map((il, index) => <p value={il}
                                                                     onClick={() => handleClick(index)}>{il}</p>))
                }
            </div>
            <Link to={"/"}>Converter</Link>
        </div>
    );
}
export default ShowRate;