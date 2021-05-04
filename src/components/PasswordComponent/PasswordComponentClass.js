import React, { Component } from 'react';
import InputComponent from '../../UI/InputComponent/InputComponent';

class PasswordComponentClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isPasswordvisible:false,
             isConfirmPasswordVisible:false
        }

        this.handlePasswordVisiblity = this.handlePasswordVisiblity.bind(this)
        this.handleConfirmPasswordVisiblity = this.handleConfirmPasswordVisiblity.bind(this)
    }
    
    handlePasswordVisiblity() {
        if (this.state.isPasswordvisible){
            this.setState({
                isPasswordvisible:false
            })
        }
        else{
            this.setState({
                isPasswordvisible:true
            })
        }
    }

    handleConfirmPasswordVisiblity() {
        if (this.state.isConfirmPasswordVisible){
            this.setState({
                isConfirmPasswordVisible:false
            })
        }
        else{
            this.setState({
                isConfirmPasswordVisible:true
            })
        }
    }
    
    render() {
        return (
            <div className="common-div password-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Password setup</h2>
                                        <p>Enter password and confirm password!</p>
                                    </div>
                                </div>

                                <div className="main-body-div main-body-div2">

                                    <div className="login-div">
                                        <div className="row mr-minus-8">
                                            <div className="col-lg-6 col-md-6 plr-8">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Enter password</label>
                                                        <div className="input-group-box password-box">
                                                            <InputComponent 
                                                                inputType={this.state.isPasswordvisible ? 'text' : 'password'}
                                                                inputClassName='form-control'
                                                                inputPlaceholder="Enter password"
                                                                inputID='password'
                                                                inputName='password' />
                                                            <button 
                                                                type="button" 
                                                                id="show_password" 
                                                                name="show_password" 
                                                                className="pass-hide password-view-click" 
                                                                onClick={this.handlePasswordVisiblity}>
                                                                    <span
                                                                        className={`pass-custom-icon material-icons ${this.state.isPasswordvisible ? 'password-hide' : 'password-view'}`}>
                                                                            {`${this.state.isPasswordvisible ? 'visibility' : 'visibility_off'}`}
                                                                            </span>
                                                                    </button>                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 plr-8">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Confirm password</label>
                                                        <div className="input-group-box password-box">
                                                        <InputComponent 
                                                                inputType={this.state.isConfirmPasswordVisible ? 'text' : 'password'}
                                                                inputClassName='form-control'
                                                                inputPlaceholder="Enter confirm password"
                                                                inputID='confirm-password'
                                                                inputName='password' />
                                                        <button 
                                                                type="button" 
                                                                id="show_password2" 
                                                                name="show_password" 
                                                                className="pass-hide password-view-click" 
                                                                onClick={this.handleConfirmPasswordVisiblity}>
                                                                    <span
                                                                        className={`pass-custom-icon material-icons ${this.state.isConfirmPasswordVisible ? 'password-hide' : 'password-view'}`}>
                                                                            {`${this.state.isConfirmPasswordVisible ? 'visibility' : 'visibility_off'}`}
                                                                            </span>
                                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
    
                        </div>  
                        
                    </div>        
                </div>
            </div>
        )
    }
}

export default PasswordComponentClass
