import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/header_logo.png'
import '../Nav/Nav.css'

export default function Nav (props){
    return(
        <div className = "nav">
            <div className = "nav-left">
                <img className = "picture" src = {image}/> <span className = "houser">Houser</span> <span className = "dashboard">Dashboard</span>
            </div>

            <div className = "nav-right">
                <Link to ='/'><span className = "logout">Logout</span></Link>
            </div>
        </div>
    )
}