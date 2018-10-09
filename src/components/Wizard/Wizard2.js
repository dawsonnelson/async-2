import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard2.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'
import {updateAddressInput} from '../../ducks/reducer'
import {updateCityInput} from '../../ducks/reducer'
import {updateStateInput} from '../../ducks/reducer'
import {updateZipInput} from '../../ducks/reducer'
import { connect } from 'react-redux';

class Wizard2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            addressInput: null,
            cityInput: null,
            stateInput: null,
            zipInput: null,
        }

        this.handleAddressInput = this.handleAddressInput.bind(this)
        this.handleCityInput = this.handleCityInput.bind(this)
        this.handleStateInput = this.handleStateInput.bind(this)
        this.handleZipInput = this.handleZipInput.bind(this)
    }

    handleAddressInput(e){
        this.props.updateAddressInput(e.target.value)
    }

    handleCityInput(e){
        this.props.updateCityInput(e.target.value)
    }

    handleStateInput(e){
        this.props.updateStateInput(e.target.value)
    }

    handleZipInput(e){
        this.props.updateZipInput(e.target.value)
        // console.log(this.props.state)
    }



    // without reducer //

    // render(){
    //             return(
    //                 <div className = 'app'>
    //                     <div className = 'nav'>
    //                         <Nav/>
    //                     </div>
    //                     <div className = 'container'>
    //                         <div className = 'anl-div'>
    //                             <span className = 'anl'>Add new listing</span>
    //                             <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
    //                         </div>
    //                         <div className = 'step'>
    //                             <span>Step 2</span>
    //                         </div>
    //                         <div className = 'step-status'>
    //                             <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
    //                         </div>
    //                         <div className ='address-div'>
    //                             <span className = 'address'>Address</span>
    //                         </div>
    //                         <div className ='address-input'>
    //                             <input className = 'address-input' onChange = {(e)=>this.handleAddressInput(e.target.value)}></input>
    //                         </div>
    //                         <div className = 'cityStateZip-div'>
    //                             <div className = 'name-container'>
    //                                 <span className = 'city'>City</span>
    //                                 <span className = 'state'>State</span>
    //                             </div>
    //                             <div className = 'input-container'>
    //                                 <input className = 'city-input' onChange = {(e)=>this.handleCityInput(e.target.value)}></input>
    //                                 <input className = 'state-input' onChange = {(e)=>this.handleStateInput(e.target.value)}></input>
    //                             </div>
    //                             <div className = 'zip-div'>
    //                                 <span className = 'zip'>Zip</span>
    //                             </div>
    //                             <div className = 'zip-input'>
    //                                 <input className = 'zip-input' onChange = {(e)=>this.handleZipInput}></input>
    //                             </div>
    //                         </div>
    //                         <div className = 'steps-div'>
    //                             <Link to ='/wizard/1' className = 'previous'>Previous Step</Link>
    //                             <Link to ='/wizard/3' className = 'next'>Next Step</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         }
    //     }









    // with reducer //

    
    render(){
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
                        <span>Step 2</span>
                    </div>
                    <div className = 'step-status'>
                    <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
                    </div>
                    <div className ='address-div'>
                        <span className = 'address'>Address</span>
                    </div>
                    <div className ='address-input'>
                        <input className = 'address-input' onChange = {this.handleAddressInput} value = {this.props.addressInput}></input>
                    </div>
                    <div className = 'cityStateZip-div'>
                        <div className = 'name-container'>
                            <span className = 'city'>City</span>
                            <span className = 'state'>State</span>
                        </div>
                        <div className = 'input-container'>
                            <input className = 'city-input' onChange = {this.handleCityInput} value = {this.props.cityInput}></input>
                            <input className = 'state-input' onChange = {this.handleStateInput} value = {this.props.stateInput}></input>
                        </div>
                        <div className = 'zip-div'>
                            <span className = 'zip'>Zip</span>
                        </div>
                        <div className = 'zip-input'>
                            <input className = 'zip-input' onChange = {this.handleZipInput} value = {this.props.zipInput}></input>
                        </div>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/1' className = 'previous'>Previous Step</Link>
                        <Link to ='/wizard/3' className = 'next'>Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
        addressInput: duckState.addressInput,
        cityInput: duckState.cityInput,
        stateInput: duckState.stateInput,
        zipInput: duckState.zipInput
    }
}

export default connect(mapStateToProps, {updateAddressInput, updateCityInput, updateStateInput, updateZipInput}) (Wizard2);