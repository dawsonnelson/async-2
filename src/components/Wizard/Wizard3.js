import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard3.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'
import image from '../../assets/colors.png'
import {updateUrlInput} from '../../ducks/reducer'
import {resetInput} from '../../ducks/reducer'
import { connect } from 'react-redux';

class Wizard3 extends Component {
    constructor(props){
        super(props);
        
        this.State = {
            urlInput: null,
        }

        this.handleUrlInput = this.handleUrlInput.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel(){
        this.props.resetInput()
    }

    handleUrlInput(e){
        this.props.updateUrlInput(e.target.value)
    }



    // without reducer //


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
//                         <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
//                     </div>
//                     <div className = 'img-display'>
//                         <img className = 'img' src={image} alt = ''></img>
//                     </div>
//                     <div className = 'url-div'>
//                         <span className = 'address'>Image URL</span>
//                     </div>
//                     <div className = 'url-input'>
//                         <input className = 'url-input' onChange = {(e)=>this.handleUrlInput(e.target.value)}></input>
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








    // with reducer //

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav/>
                </div>
                <div className = 'container'>
                    <div className = 'anl-div'>
                        <span className = 'anl'>Add new listing</span>
                        <Link to  ="/dashboard"><button className = 'cancel' onClick={this.handleCancel}>Cancel</button></Link>
                    </div>
                    <div className = 'step'>
                        <span>Step 3</span>
                    </div>
                    <div className = 'step-status'>
                    <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
                    </div>
                    <div className = 'img-display'>
                        <img className = 'img' src={image} alt=''></img>
                    </div>
                    <div className = 'url-div'>
                        <span className = 'address'>Image URL</span>
                    </div>
                    <div className = 'url-input'>
                        <input className = 'url-input' onChange = {this.handleUrlInput} value = {this.props.urlInput}></input>
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

function mapStateToProps(duckState) {
    return {
        urlInput: duckState.urlInput
    }
}

export default connect(mapStateToProps, {updateUrlInput, resetInput}) (Wizard3);




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