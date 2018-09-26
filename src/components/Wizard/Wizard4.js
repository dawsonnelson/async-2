import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard4.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'

export default class Wizard4 extends Component {

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
                </div>
            </div>
        )
    }
}