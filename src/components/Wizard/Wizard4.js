import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard4.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'

export default class Wizard4 extends Component {
    constructor(props){
        super(props);

        this.state = {
            loanInput: null,
            mortgageInput: null,
        }
    }

    handleLoanInput(amount){
        console.log(this.state.loanInput)

        this.setState({
            loanInput: amount
        })
            
    }

    handleMortgageInput(amount){
        console.log(this.state.mortgageInput)

        this.setState({
            mortgageInput: amount
        })
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/wizard/4'/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                        <button className = 'cancel'>Cancel</button>
                    </div>
                    <div className = 'step'>
                        <span>Step 4</span>
                    </div>
                    <div className = 'step-status'>
                        <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'active' src = {Active}/> <img className = 'inactive' src = {Inactive}/>
                    </div>
                    <div className = 'loan-div'>
                        <span className = 'loan'>Loan Amount</span>
                    </div>
                    <div className = 'loan-input'>
                        <input className = 'loan-input' onChange = {(e) => this.handleLoanInput(e.target.value)}></input>
                    </div>
                    <div className = 'morg-div'>
                        <span className = 'morg'>Monthly Mortgage</span>
                    </div>
                    <div className = 'morg-input'>
                        <input className = 'morg-input' onChange = {(e) => this.handleMortgageInput(e.target.value)}></input>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/3' className = 'previous'>Previous Step</Link>
                        <Link to ='/wizard/5' className = 'next'>Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}