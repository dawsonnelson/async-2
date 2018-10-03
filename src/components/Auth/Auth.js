import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Auth.css'
import auth_logo from './auth_logo.png'

export default class Auth extends Component {


    render(){
        return(
            <div className = 'app'>
                <div className = 'container'>
                    <div className = 'div_house_png'>
                        <img className = 'house_png' src = {auth_logo} alt = ''/>
                    </div>
                    <div className = 'username-div'>
                        <span className = 'username'>Username</span>
                    </div>
                    <div className = 'username-input'>
                        <input className = 'username-input' /*onChange = {updateLoanInput}*/></input>
                    </div>
                    <div className = 'password-div'>
                        <span className = 'password'>Password</span>
                    </div>
                    <div className = 'password-input'>
                        <input className = 'password-input' /*onChange = {updateMortgageInput}*/></input>
                    </div>
                    <div className = 'steps-div'>
                        <button className = 'login'>Login</button>
                        <button className = 'register'>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}