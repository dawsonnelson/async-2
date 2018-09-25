import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'

export default class Dashboard extends Component {

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/dashboard'/>
                </div>
                <div className = 'container'>
                    <div className = 'anp-div'>
                        <button className = 'add-new'>Add new property</button>
                    </div>
                    <div className = 'filter-div'>
                        <span>List properties with "desired rent" greater than: $</span> <input className = 'input-box'></input> <button className = 'filter'>Filter</button> <button className = 'reset'>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}