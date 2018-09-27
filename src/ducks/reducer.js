const initialState = {
    propName: null,
    propDesc: null,
    addressInput: null,
    cityInput: null,
    stateInput: null,
    zipInput: null,
    urlInput: null,
    loanInput: null,
    mortgageInput: null,
    rentInput: null
}

const UPDATE_PROPNAME
const UPDATE_PROPDESC
const UPDATE_ADDRESSINPUT
const UPDATE_CITYINPUT
const UPDATE_STATEINPUT
const UPDATE_ZIPINPUT
const UPDATE_URLINPUT
const UPDATE_LOANINPUT
const UPDATE_MORTGAGEINPUT
const UPDATE_RENTINPUT

export function updatePropName( propName ){
    return(
        type: UPDATE_PROPNAME,
        payload: propName
    );
}