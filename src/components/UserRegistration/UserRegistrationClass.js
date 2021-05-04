import React, { Component } from 'react';
import Googleicon from '../../assets/images/icons/Google+.svg'
import Facebookicon from '../../assets/images/icons/Facebook.svg'
import InputComponent from '../../UI/InputComponent/InputComponent';
import { userRegistration } from '../../redux';
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions';

const initialState = {
    name:"",
    email:"",
    nameError:"",
    emailError:""
}


class UserRegistrationClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             initialState
        }
    }

    handleContinue = () => {
        const isValid = this.validate();
        if(isValid){
            console.log(this.state.userRegistration);
            this.setState({
                initialState
            })
        }
        else(
            console.log('invalide form')
        )
    }

    validate = () => {
        let nameError="";
        let emailError="";

        if(this.state.name==""){
            nameError="This field is required";
        }

            if (!this.state.email.includes('@')){
                emailError="This is an invalid email";
            }

        if(nameError){
            this.setState({nameError:nameError});
            return false;
        }

        if(emailError){
            this.setState({emailError:emailError});
            return false;
        }

        return true;
    }

    handleChange = (e) => {
        let name = e.target.name

        switch(name) {
            case 'name':
                this.setState({name:e.target.value});
                break;
            case 'email':
                this.setState({email:e.target.value});
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <>
                <div className="common-div user-registration-div">
                    <div className="container">
                        <div className="row">
        
                            <div className="col-lg-12 col-md-12">        
        
                                <div className="common-card-div">
                                    
                                    <div className="heading-top-row">
                                        <div className="heading-div"> 
                                            <h2>User registration</h2>
                                            <p>Enter user name or email and why you want to join!</p>
                                        </div>
                                    </div>

                                    <div className="main-body-div main-body-div2 pr-80">

                                        <div className="login-div">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-div">
                                                        <div className="form-group">
                                                            <label for="">Name</label>
                                                            <InputComponent 
                                                            inputType='text'
                                                            inputClassName='form-control'
                                                            inputPlaceholder='Enter name'
                                                            inputName='name'
                                                            inpValue={this.state.name}
                                                            onInputChange={this.handleChange} 
                                                            />
                                                            <span style={{color: "red"}}>{this.state.nameError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="">Email</label>
                                                            <InputComponent 
                                                                inputType="email"
                                                                inputClassName='form-control'
                                                                inputName='email'
                                                                inpValue={this.state.email}
                                                                inputPlaceholder='Enter email address'
                                                                onInputChange={this.handleChange} 
                                                                 />
                                                                 <span style={{color: "red"}}>{this.state.emailError}</span>
                                                            <span className="help-error font-italic display-none">                                                        
                                                                <span className="text-underline font-500">Email ID</span> is already exist
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="social-row">
                                                        <div className="left-social-txt">
                                                            <p> <span className="text-span">Or </span>  Login with</p>
                                                        </div>
                                                        <div className="social-button-row">
                                                            <button className="btn btn-social btn-google-plus mr-10">
                                                                <img src={Googleicon} className="img-fluid img-social img-google" alt="Google+" />
                                                            </button>
                                                            <button className="btn btn-social btn-facebook">
                                                                <img src={Facebookicon} className="img-fluid img-social img-facebook" alt="Facebook" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="description-div">
                                                        <h4>Why you will love <span className="text-bold">Travelz.jp</span></h4>
                                                        <div className="list-info-div">
                                                            <ul>
                                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                                <li>Duis porttitor tristique varius. </li>
                                                                <li>Suspendisse potenti.</li>
                                                                <li>Praesent mauris nunc posuere malesuadaest.</li>
                                                                <li>Suspendisse potenti. </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="footer-bottom-row">
                                        <div className="container">
                                            <div className="row mr-minus-8">
                                                <div className="col-lg-12 plr-8">
                                                    <div className="button-row">
                                                        <div className="btn-left-side justify-content-between"> 
                                                            <button className="btn btn-outline-primary btn-common btn-previous">
                                                                <i className="fe fe-arrow-left fe-icon"></i>
                                                                <span className="text-span">Previous</span>
                                                            </button>
                                                            <a href="#" className="btn btn-link btn-skip mr-30">Skip <span className="remove-mobile">to End of </span>Process!</a>
                                                        </div>
                                                        <div className="btn-right-side"> 
                                                            <button className="btn btn-primary btn-common btn-continue" onClick={this.handleContinue}>
                                                                <span className="text-span">Continue</span>
                                                                <i className="fe fe-arrow-right fe-icon"></i>
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
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userRegistration:  state.userRegistration
    }
}

const mapDispatchToProps = dispatch => {
    return{
        userRegistration :dispatch(setCurrentPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistrationClass);
