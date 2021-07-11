import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./Main.css";
import {Link} from "react-router-dom";


let flagIndex;

const Converter = (props) => {

    const [amount, setAmount] = useState(1);
    const [amountRate, setAmountRate] = useState(0);
    const [flag, setflag] = useState(true);

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
        setflag(!flag);
    }

    const handlerChanger = (e) => {
        setAmount(e.target.value);
    }

    const calculate = () => {
        if (flagIndex == undefined) {
            handleClick(0);
        } else {
            const numberTop = parseInt(topInput.current.value);

            if (isNaN(topInput.current.value)) {
                alert("Put digits only");
                setAmount(1);
                setAmountRate(flagIndex);
            } else {
                setAmountRate(numberTop * flagIndex);
            }
        }
    }


    let spanRef = React.createRef();
    let topInput = React.createRef();
    let bottomInput = React.createRef();

    return (
        <div>
            <div className="rateCalcBlock">
                <div className="innerBlock">
                    <input type="text" placeholder={"EUR"} value={amount} ref={topInput}
                           onChange={(e) => handlerChanger(e)}/>
                    <span className="baseRate">{Exrates.map(el => el.base)}</span>
                    <br/>
                    <input type="text" placeholder={"Rate"} value={amountRate} ref={bottomInput}/>

                    <span ref={spanRef} onClick={() => setflag(!flag)} className="pointRate"></span>

                    { flag && <div className="select">
                        {
                            arrKeysRate.map((el) => el.map((il, index) => <p value={il}
                                                                             onClick={() => handleClick(index)}>{il}</p>))
                        }
                    </div>}
                </div>
                <button onClick={calculate} className="buttonCalc">calculate</button>
                <Link to={"/showrate"}>showRate</Link>
            </div>
        </div>
    );
}

export default Converter;