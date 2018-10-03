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
          payoad: addressInput
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


  function reducer( state = initialState, action ) {
                                                                                                                                                                                                                                                // console.log('REDUCER HIT: Action ->', action );

    switch( action.type ){
        case UPDATE_PROPNAME:
            return Object.assign( {}, state, { propName: action.payload } );
        
        case UPDATE_PROPDESC:
            return Object.assign( {}, state, { propDesc: action.payload } );

        case UPDATE_ADDRESSINPUT:
            return Object.assign( {}, state, { updateAddressInput: action.payload } );

        case UPDATE_CITYINPUT:
            return Object.assign( {}, state, { updateCityInput: action.payload } );

        case UPDATE_STATEINPUT:
            return Object.assign( {}, state, { updateStateInput: action.payload } );
                    
        case UPDATE_ZIPINPUT:
            return Object.assign( {}, state, { updateZipInput: action.payload } );

        case UPDATE_URLINPUT:
            return Object.assign( {}, state, { updateUrlInput: action.payload } );

        case UPDATE_LOANINPUT:
            return Object.assign( {}, state, { updateLoanInput: action.payload } );

        case UPDATE_MORTGAGEINPUT:
            return Object.assign( {}, state, { updateMortgageInput: action.payload } );  
            
        case UPDATE_RENTINPUT:
            return Object.assign( {}, state, { updateRentInput: action.payload } );
    }
  }

export default reducer;