import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Wizard4.css'
import Active from '../../assets/step_active.png'
import Inactive from '../../assets/step_inactive.png'
import Completed from '../../assets/step_completed.png'
import {updateLoanInput} from '../../ducks/reducer'
import {updateMortgageInput} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Wizard4 extends Component {
    constructor(props){
        super(props);

        this.state = {
            loanInput: null,
            mortgageInput: null,
        }
        this.handleLoanInput = this.handleLoanInput.bind(this)
        this.handleMortgageInput = this.handleMortgageInput.bind(this)
    }

    handleLoanInput(e){
      this.props.updateLoanInput(e.target.value)      
    }

    handleMortgageInput(e){
        this.props.updateMortgageInput(e.target.value)
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
//                         <span>Step 4</span>
//                     </div>
//                     <div className = 'step-status'>
//                         <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
//                     </div>
//                     <div className = 'loan-div'>
//                         <span className = 'loan'>Loan Amount</span>
//                     </div>
//                     <div className = 'loan-input'>
//                         <input className = 'loan-input' onChange = {(e)=>this.handleLoanInput(e.target.value)}></input>
//                     </div>
//                     <div className = 'morg-div'>
//                         <span className = 'morg'>Monthly Mortgage</span>
//                     </div>
//                     <div className = 'morg-input'>
//                         <input className = 'morg-input' onChange = {(e)=>this.handleMortgageInput(e.target.value)}></input>
//                     </div>
//                     <div className = 'steps-div'>
//                         <Link to ='/wizard/3' className = 'previous'>Previous Step</Link>
//                         <Link to ='/wizard/5' className = 'next'>Next Step</Link>
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
                        <Link to  ="/dashboard"><button className = 'cancel'>Cancel</button></Link>
                    </div>
                    <div className = 'step'>
                        <span>Step 4</span>
                    </div>
                    <div className = 'step-status'>
                    <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'completed' src = {Completed} alt = ''/> <img className = 'active' src = {Active} alt = ''/> <img className = 'inactive' src = {Inactive} alt = ''/>
                    </div>
                    <div className = 'loan-div'>
                        <span className = 'loan'>Loan Amount</span>
                    </div>
                    <div className = 'loan-input'>
                        <input className = 'loan-input' onChange = {this.handleLoanInput} value = {this.props.loanInput}></input>
                    </div>
                    <div className = 'morg-div'>
                        <span className = 'morg'>Monthly Mortgage</span>
                    </div>
                    <div className = 'morg-input'>
                        <input className = 'morg-input' onChange = {this.handleMortgageInput} value = {this.props.mortgageInput}></input>
                    </div>
                    <div className = 'steps-div'>
                        <Link to ='/wizard/3' className = 'previous'>Previous Step</Link>
                        <Link to ='/wizard/5' className = 'next'>Next Step</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(duckState) {
    return {
        loanInput: duckState.loanInput,
        mortgageInput: duckState.mortgageInput
    }
}

export default connect(mapStateToProps, {updateLoanInput, updateMortgageInput})(Wizard4);