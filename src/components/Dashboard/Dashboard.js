import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            // propName: null,
            // propDesc: null,
            // addressInput: null,
            // cityInput: null,
            // stateInput: null,
            // zipInput: null,
            // urlInput: null,
            // loanInput: null,
            // mortgageInput: null,
            // rentInput: null
            houses: []
        }

        this.handleDelete = this.handleDelete.bind(this)
    }


    componentDidMount(){
        axios.get(`/api/houser/getInfo`)
        .then(res=>{
            console.log(res.data)

            this.setState({
                // propName: res.data.propName,
                // propDesc: res.data.propDesc,
                // addressInput: res.data.addressInput,
                // cityInput: res.data.cityInput,
                // stateInput: res.data.stateInput,
                // zipInput: res.data.zipInput,
                // urlInput: res.data.urlInput,
                // loanInput: res.data.loanInput,
                // mortgageInput: res.data.mortgageInput,
                // rentInput: res.data.rentInput
                houses: res.data

            })
        })
    }

    handleDelete(id){
        console.log(this.state.houses[0])

        axios.delete(`/api/houser/delete?id=${}`)
        .then(this.reload)
    }

    // reload(){
    //     console.log("Clicked");
    //     window.location.reload();
    // }

    renderHouses(){
        return this.state.houses.map((house) => {
            return(
            <div className = 'info'>
                <div className = 'urlPic'>
                    <img id = 'hu' src = {house.urlinput}></img>
                </div>

                <div className = 'nameDesc'>
                    <span id = 'pn'>{house.propname}</span>
                    <span id = 'pd'>{house.propdesc}</span>
                </div>
                
                <div className = 'everyElse'>
                    <span id = 'hl'>Loan: ${house.loaninput}</span> <button onClick ={() => this.handleDelete(house.property_id)} />
                    <span id = 'hm'>Monthly Mortgage: ${house.mortgageInput}</span>
                    <span id = 'hr'>{house.rentinput}</span>
                    <span id = 'hs'>State: {house.stateinput}</span>
                    <span id = 'ha'>Address: {house.addressinput}</span>
                    <span id = 'hc'>City: {house.cityinput}</span>
                    <span id = 'hz'>Zip: {house.zipinput}</span>
                </div>
                
                {/* <h1>{house.cityinput}</h1> */}

            </div>
            )
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
                        {this.renderHouses()}
                    </div>
                </div>
            </div>
        )
    }
}