import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard1.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import {updatePropName} from '../../ducks/reducer'
import {updatePropDesc} from '../../ducks/reducer'
import {resetInput} from '../../ducks/reducer'
import { connect } from 'react-redux';

class Wizard1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            propName: null,
            propDesc: null,
        }

        this.handleNameInput = this.handleNameInput.bind(this)
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleCancel(){
        this.props.resetInput()
    }

    handleNameInput(e){
        this.props.updatePropName(e.target.value)
        }
    

    handleDescriptionInput(e){
        this.props.updatePropDesc(e.target.value)
        }
    



//  without reducer  //


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
//                         <span>Step 1</span>
//                     </div>
//                     <div className = 'step-status'>
//                         <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
//                     </div>
//                     <div className = 'name-div'>
//                         <span className = 'name'>Property Name</span>
//                     </div>
//                     <div className = 'name-input'>
//                         <input className = 'name-input' onChange = {(e) => this.handleNameInput(e.target.value)}></input>
//                     </div>
//                     <div className = 'description-div'>
//                         <span className = 'description'>Property Description</span>
//                     </div>
//                     <div className = 'description-input'>
//                         <textarea className = 'description-input' onChange = {(e) => this.handleDescriptionInput(e.target.value)}></textarea> 
//                     </div>
//                     <div className = 'next-div'>
//                         <Link to ='/wizard/2' className = 'next' >Next Step</Link>
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
                        <span>Step 1</span>
                    </div>
                    <div className = 'step-status'>
                    <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
                    </div>
                    <div className = 'name-div'>
                        <span className = 'name'>Property Name</span>
                    </div>
                    <div className = 'name-input'>
                        <input className = 'name-input' onChange = {this.handleNameInput} value={this.props.propName}></input>
                    </div>
                    <div className = 'description-div'>
                        <span className = 'description'>Property Description</span>
                    </div>
                    <div className = 'description-input'>
                        <textarea className = 'description-input' onChange = {this.handleDescriptionInput} value = {this.props.propDesc}></textarea> 
                    </div>
                    <div className = 'next-div'>
                        <Link to ='/wizard/2' className = 'next' >Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
        propName: duckState.propName,
        propDesc: duckState.propDesc
    }
}
export default connect(mapStateToProps, { updatePropName, updatePropDesc, resetInput})(Wizard1);