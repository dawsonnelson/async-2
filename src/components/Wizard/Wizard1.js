import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard1.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'

export default class Wizard1 extends Component {



    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/wizard/1'/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                         <button className = 'cancel'>Cancel</button>
                    </div>
                    <div className = 'step'>
                        <span>Step 1</span>
                    </div>
                    <div className = 'step-status'>
                        <img className = 'active' src = {Active}/> <img className = 'inactive' src = {Inactive}/> <img className = 'inactive' src = {Inactive}/> <img className = 'inactive' src = {Inactive}/> <img className = 'inactive' src = {Inactive}/>
                    </div>
                    <div className = 'name-div'>
                        <span className = 'name'>Property Name</span>
                    </div>
                    <div className = 'name-input'>
                    <input className = 'name-input'></input>
                    </div>
                    <div className = 'description-div'>
                        <span className = 'description'>Property Description</span>
                    </div>
                    <div className = 'description-input'>
                        <textarea className = 'description-input'></textarea>
                    </div>
                    <div className = 'next-div'>
                        <Link to ='/wizard/2' className = 'next'>Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}