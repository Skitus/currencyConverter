import axios from "axios";

let initialState = {
    rate: []
};

const main  = (state = initialState,  action) => {
    switch(action.type) {
            case "SET_RATE": {
            return {
                ...state,
                rate: [ ...state.rate, action.payload]
            }
        }
        default:
            return state;
    }
}

export const setRate = (items) => ({
    type: "SET_RATE",
    payload: items
});

export const fetchRate = () => (dispatch) => {
    axios.get(`http://data.fixer.io/api/latest?access_key=f339ca174db99579f05f0215f658b3c0&format=1`).then(({data}) => {
            dispatch(setRate(data));
})
};



export default main;