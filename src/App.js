import './App.css';
import {Route} from "react-router-dom";
import Converter from "./components/Converter";
import {useDispatch} from "react-redux";
import React from "react";
import {fetchRate} from "./components/redux/main";
import ShowRate from "./components/ShowRate";
import "./components/Main.css";


function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchRate());
    }, []);


    return (
        <div className="App">
            <Route path="/" render={() => <Converter/>} exact/>
            <Route path="/showrate" render={() => <ShowRate />} exact/>
        </div>
    );
}

export default App;
