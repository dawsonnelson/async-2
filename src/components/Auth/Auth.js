import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Auth.css'
import auth_logo from './auth_logo.png'
import axios from 'axios'

export default class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }



    handleUsernameInput(e){
        this.setState({
            username: e.target.value
        })
        console.log(this.state.username)
    }

    handlePasswordInput(e){
        this.setState({
            password: e.target.value
        })
    }

    handleRegister(){
        let {username, password} = this.state
        // console.log(this.props.history.push('/dashboard'))
        axios.post('/api/auth/register', {username, password}) 
        .then((res)=>{
            this.setState({
                username: res.data,
                password: res.data
            })
            this.props.history.push('/dashboard')
            console.log('it worked')

        }).catch((err) => { console.log(err)})
    }

    handleLogin(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
        .then((res) => {
            this.setState({
                username: res.data,
                password: res.data
            })
            this.props.history.push('/dashboard')
        })
    }


    render(){
        return(
            <div className = 'app'>
                <div id = 'containerAuth'>
                    <div className = 'div_house_png'>
                        <img className = 'house_png' src = {auth_logo} alt = ''/>
                    </div>
                    <div className = 'username-div'>
                        <span className = 'username'>Username</span>
                    </div>
                    <div className = 'username-input'>
                        <input className = 'username-input' onChange = {this.handleUsernameInput}></input>
                    </div>
                    <div className = 'password-div'>
                        <span className = 'password'>Password</span>
                    </div>
                    <div className = 'password-input'>
                        <input className = 'password-input' onChange = {this.handlePasswordInput}></input>
                    </div>
                    <div className = 'steps-div'>
                        <button className = 'login' onClick = {this.handleLogin}>Login</button>
                        <button className = 'register' onClick = {this.handleRegister}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}