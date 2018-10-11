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

const UPDATE_PROPNAME ='UPDATE_PROPNAME';
const UPDATE_PROPDESC = 'UPDATE_PROPDESC';
const UPDATE_ADDRESSINPUT ='UPDATE_ADDRESSINPUT';
const UPDATE_CITYINPUT = 'UPDATE_CITYINPUT';
const UPDATE_STATEINPUT = 'UPDATE_STATEINPUT ';
const UPDATE_ZIPINPUT = 'UPDATE_ZIPINPUT ';
const UPDATE_URLINPUT = 'UPDATE_URLINPUT '
const UPDATE_LOANINPUT = 'UPDATE_LOANINPUT';
const UPDATE_MORTGAGEINPUT = 'UPDATE_MORTGAGEINPUT';
const UPDATE_RENTINPUT = 'UPDATE_RENTINPUT';
const RESET_INPUT = 'RESET_INPUT';

function reducer( state = initialState, action ) {
 console.log('REDUCER HIT: Action ->', action );

  switch( action.type ){
      case UPDATE_PROPNAME:
          return Object.assign( {}, state, { propName: action.payload } );
      
      case UPDATE_PROPDESC:
          return Object.assign( {}, state, { propDesc: action.payload } );

      case UPDATE_ADDRESSINPUT:
          return Object.assign( {}, state, { addressInput: action.payload } );

      case UPDATE_CITYINPUT:
          return Object.assign( {}, state, { cityInput: action.payload } );

      case UPDATE_STATEINPUT:
          return Object.assign( {}, state, { stateInput: action.payload } );
                  
      case UPDATE_ZIPINPUT:
          return Object.assign( {}, state, { zipInput: action.payload } );

      case UPDATE_URLINPUT:
          return Object.assign( {}, state, { urlInput: action.payload } );

      case UPDATE_LOANINPUT:
          return Object.assign( {}, state, { loanInput: action.payload } );

      case UPDATE_MORTGAGEINPUT:
          return Object.assign( {}, state, { mortgageInput: action.payload } );  
          
      case UPDATE_RENTINPUT:
          return Object.assign( {}, state, { rentInput: action.payload } );

      case RESET_INPUT:
          return initialState

          default: return state
  }
}

export function updatePropName( propName ){
    return {
      type: UPDATE_PROPNAME,
      payload: propName
    };
  }

  export function updatePropDesc( propDesc ){
      return{
          type: UPDATE_PROPDESC,
          payload: propDesc
      };
  }

  export function updateAddressInput( addressInput ){
      return{
          type: UPDATE_ADDRESSINPUT,
          payload: addressInput
      };
  }

  export function updateCityInput( cityInput ){
      return{
          type: UPDATE_CITYINPUT,
          payload: cityInput
      };
  }

  export function updateStateInput( stateInput ){
      return{
          type: UPDATE_STATEINPUT,
          payload: stateInput
      };
  }

  export function updateZipInput( zipInput ){
      return{
          type: UPDATE_ZIPINPUT,
          payload: zipInput
      }
  }

  export function updateUrlInput( urlInput ){
      return{
          type: UPDATE_URLINPUT,
          payload: urlInput
      }
  }

  export function updateLoanInput( loanInput ){
      return{
          type: UPDATE_LOANINPUT,
          payload: loanInput
      }
  }

  export function updateMortgageInput( mortgageInput ){
      return{
          type: UPDATE_MORTGAGEINPUT,
          payload: mortgageInput
      }
  }

  export function updateRentInput( rentInput ){
      return{
          type: UPDATE_RENTINPUT,
          payload: rentInput
      }
  }

  export function resetInput(){
      return{
          type: RESET_INPUT
      }
  }



export default reducer;