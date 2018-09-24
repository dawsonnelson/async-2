import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/header_logo.png'
import '../Nav/Nav.css'

export default function Nav (props){
    return(
        <div>
            <div>
                <img src = {image}/> <span>Houser</span> <span>Dashboard</span>
            </div>

            <div>
                <Link to ='/'><span>Logout</span></Link>
            </div>
        </div>
    )
}