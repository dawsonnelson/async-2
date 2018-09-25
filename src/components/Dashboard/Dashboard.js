import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(props){
        super(props);


    }

    handleAddNew(){
        
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = '/dashboard'/>
                </div>
                <div className = 'container'>
                    <div className = 'anp-div'>
                        <Link to ='/wizard/1' className = 'add-new'>Add new property</Link>
                    </div>
                    <div className = 'filter-div'>
                        <span>List properties with "desired rent" greater than: $</span> <input placeholder ='0' className = 'input-box'></input> <button className = 'filter'>Filter</button> <button className = 'reset'>Reset</button>
                    </div>
                    <div className = 'line'>

                    </div>
                    <div className = 'home-list'>
                        <h3>Home Listings</h3>
                    </div>
                    <div className = 'listing-container'>
                        <div className = 'picture'></div>
                        <div className = 'name'></div>
                        <div className = 'loan'></div>
                    </div>
                </div>
            </div>
        )
    }
}