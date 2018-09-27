import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard5.css'
import Active from '../../assets/step_active.png'
import Completed from '../../assets/step_completed.png'

export default class Wizard5 extends Component {
    constructor(props){
        super(props);

        this.state = {
            rentInput: null,
        }
    }

    handleRentInput(amount){
        this.setState({
            rentInput: amount
        })
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/wizard/5'/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                        <button className = 'cancel'>Cancel</button>
                    </div>
                    <div className = 'step'>
                        <span>Step 5</span>
                    </div>
                    <div className = 'step-status'>
                        <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'active' src = {Active}/>
                    </div>
                    <div className = 'reco-div'>
                        <span className = 'reco'>Recommended Rent $filler</span>
                    </div>
                    <div className = 'rent-div'>
                        <span className = 'rent'>Desired Rent</span>
                    </div>
                    <div className = 'rent-input'>
                        <input className = 'rent-input' onChange = {(e) => this.handleRentInput(e.target.value)}></input>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/4' className = 'previous'>Previous Step</Link>
                        <button className = 'complete'>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}