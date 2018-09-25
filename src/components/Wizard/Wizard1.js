import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard1.css'

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
                </div>
            </div>
        )
    }
}