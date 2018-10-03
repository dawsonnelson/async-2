import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            propName: null,
            propDesc: null,
            addressInput: null,
            cityInput: null,
            stateInput: null,
            zipInput: null,
            urlInput: null,
            loanInput: null,
            mortgageInput: null,
            rentInput: null
        }
    }


    componentDidMount(){
        axios.get(`/api/houser/getInfo`)
        .then(res=>{
            console.log(res.data)

            this.setState({
                propName: res.data.propName,
                propDesc: res.data.propDesc,
                addressInput: res.data.addressInput,
                cityInput: res.data.cityInput,
                stateInput: res.data.stateInput,
                zipInput: res.data.zipInput,
                urlInput: res.data.urlInput,
                loanInput: res.data.loanInput,
                mortgageInput: res.data.mortgageInput,
                rentInput: res.data.rentInput
            })
        })
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