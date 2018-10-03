import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard3.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'
import image from '../../assets/colors.png'
// import {updateUrlInput} from '../../ducks/reducer'

export default class Wizard3 extends Component {
    constructor(props){
        super(props);
        
        this.State = {
            urlInput: null,
        }
    }

    handleUrlInput(amount){
        this.setState({
            urlInput: amount
        })
    }



    // without reducer //


    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                        <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
                    </div>
                    <div className = 'step'>
                        <span>Step 3</span>
                    </div>
                    <div className = 'step-status'>
                        <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
                    </div>
                    <div className = 'img-display'>
                        <img className = 'img' src={image} alt = ''></img>
                    </div>
                    <div className = 'url-div'>
                        <span className = 'address'>Image URL</span>
                    </div>
                    <div className = 'url-input'>
                        <input className = 'url-input' onChange = {(e)=>this.handleUrlInput(e.target.value)}></input>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/2' className = 'previous'>Previous Step</Link>
                        <Link to ='/wizard/4' className = 'next'>Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}








    // with reducer //

//     render(){
//         return(
//             <div className = 'app'>
//                 <div className = 'nav'>
//                     <Nav/>
//                 </div>
//                 <div className = 'container'>
//                     <div className = 'anl-div'>
//                         <span className = 'anl'>Add new listing</span>
//                         <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
//                     </div>
//                     <div className = 'step'>
//                         <span>Step 3</span>
//                     </div>
//                     <div className = 'step-status'>
//                         <img className = 'completed' src = {Completed}/> <img className = 'completed' src = {Completed}/> <img className = 'active' src = {Active}/> <img className = 'inactive' src = {Inactive}/> <img className = 'inactive' src = {Inactive}/>
//                     </div>
//                     <div className = 'img-display'>
//                         <img className = 'img' src={image}></img>
//                     </div>
//                     <div className = 'url-div'>
//                         <span className = 'address'>Image URL</span>
//                     </div>
//                     <div className = 'url-input'>
//                         <input className = 'url-input' onChange = {updateUrlInput}></input>
//                     </div>
//                     <div className = 'steps-div'>
//                         <Link to ='/wizard/2' className = 'previous'>Previous Step</Link>
//                         <Link to ='/wizard/4' className = 'next'>Next Step</Link>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }




// <div className = 'app'>
//     <div className = 'nav'>
//         <Nav url = '/wizard/3'/>
//     </div>
//     <div className = 'container'>
//         <div className = 'anl-div'>
//             <span className = 'anl'>Add new listing</span>
//             <button className = 'cancel'>Cancel</button>
//         </div>

//     </div>
// </div>