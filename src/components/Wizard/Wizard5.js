import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard5.css'
import Active from '../../assets/step_active.png'
import Completed from '../../assets/step_completed.png'
// import {updateRentInput} from '../../ducks/reducer'
import { updatePropName, updatePropDesc, updateAddressInput, updateCityInput, updateStateInput,
         updateZipInput, updateUrlInput, updateLoanInput, updateMortgageInput, updateRentInput} from '../../ducks/reducer'
import axios from 'axios'
import { connect } from 'react-redux';



class Wizard5 extends Component {
    constructor(props){
        super(props);

        this.state = {
            rentInput: '',
        }

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRentInput = this.handleRentInput.bind(this);
        // this.handleRentInput = this.handleRentInput.bind(this)
    }

    handleRentInput(e){
        this.props.updateRentInput(e.target.value)
    }

    handleCreate(){
        // axios.post('/api/houser/create', {PropName: this.state.propName, PropDesc: this.state.propDesc, Address: this.state.addressInput, City: this.state.cityInput, State: this.state.stateInput, Zip: this.state.zipInput, Url: this.state.urlInput, Loan: this.state.loanInput, Mortgage: this.state.mortgageInput, Rent: this.state.rentInput })
        let {propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput } = this.props
        console.log(this.props)

        axios.post('/api/houser/create', {propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput })
        .then(res=>{
           this.props.history.push(`/dashboard`)
        })
    }





    // without reducer //


//     render(){
//         return(
//             <div className = 'app'>
//                 <div className = 'nav'>
//                     <Nav/>
//                 </div>
//                 <div className = 'container'>
//                     <div className = 'anl-div'>
//                         <span className = 'anl'>Add new listing</span>
//                         <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
//                     </div>
//                     <div className = 'step'>
//                         <span>Step 5</span>
//                     </div>
//                     <div className = 'step-status'>
//                         <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/>
//                     </div>
//                     <div className = 'reco-div'>
//                         <span className = 'reco'>Recommended Rent $filler</span>
//                     </div>
//                     <div className = 'rent-div'>
//                         <span className = 'rent'>Desired Rent</span>
//                     </div>
//                     <div className = 'rent-input'>
//                         <input className = 'rent-input' onChange = {(e) => this.handleRentInput(e.target.value)}></input>
//                     </div>
//                     <div className = 'steps-div'>
//                         <Link to ='/wizard/4' className = 'previous'>Previous Step</Link>
//                         <button className = 'complete' onClick = {this.handleCreate}>Complete</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


    // with reducer //


    render(){
        // const {updatePropName, updatePropDesc, updateAddressInput, updateCityInput, updateStateInput, updateZipInput, updateUrlInput, updateLoanInput, updateMortgageInput, updateRentInput} = this.props;
        console.log(this.props)
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                        <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
                    </div>
                    <div className = 'step'>
                        <span>Step 5</span>
                    </div>
                    <div className = 'step-status'>
                    <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/>
                    </div>
                    <div className = 'reco-div'>
                        <span className = 'reco'>Recommended Rent $filler</span>
                    </div>
                    <div className = 'rent-div'>
                        <span className = 'rent'>Desired Rent</span>
                    </div>
                    <div className = 'rent-input'>
                        <input className = 'rent-input' onChange = {this.handleRentInput} value = {this.props.rentInput}></input>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/4' className = 'previous'>Previous Step</Link>
                        <button className = 'complete' onClick = {this.handleCreate}>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}

// var propName = 1;


function mapStateToProps(duckState) {
    return {
        propName: duckState.propName,
        propDesc: duckState.propDesc,
        addressInput: duckState.addressInput,
        cityInput: duckState.cityInput,
        stateInput: duckState.stateInput,
        zipInput: duckState.zipInput,
        urlInput: duckState.urlInput,
        loanInput: duckState.loanInput,
        mortgageInput: duckState.mortgageInput,
        rentInput: duckState.rentInput
    }
}
 

// function mapStateToProps(duckState) {
//     const { propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput } = duckState;
    
//     return {
//         propName,
//         propDesc,
//         addressInput,
//         cityInput,
//         stateInput,
//         zipInput,
//         urlInput,
//         loanInput,
//         mortgageInput,
//         rentInput
//     }
// }


export default connect(mapStateToProps, {
    updatePropName, 
    updatePropDesc,
    updateAddressInput,
    updateCityInput,
    updateStateInput,
    updateZipInput,
    updateUrlInput,
    updateLoanInput,
    updateMortgageInput,
    updateRentInput
})(Wizard5);

// export default connect(mapStateToProps, {})(Wizard5);




