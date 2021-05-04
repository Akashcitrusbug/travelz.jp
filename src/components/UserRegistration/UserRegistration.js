import React, {useState} from 'react';
import Googleicon from '../../assets/images/icons/Google+.svg'
import Facebookicon from '../../assets/images/icons/Facebook.svg'
import InputComponent from '../../UI/InputComponent/InputComponent';
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions';

function UserRegistration({currentpage}) {
    const initialState = {
        name:"",
        email:"",
    }

    const initalError = {
        nameError:'',
        emailError:''
    }
    const[formData, setFormData] = useState(initialState)
    const[formError, setFormError] = useState(initalError)

    const {name, email}=formData
    const {nameError, emailError} = formError

    const handleContinue = (e) => {
        let isFormValid = validateForm(e)
        if(isFormValid){
            setFormError('')
            currentpage({id:2, values: {name, email}})
        }
        else{console.log('sorry please try agin');}
    }

    const validateForm = (e) => {
        e.preventDefault();
        let isValid=true;

        if(name === ''){
            setFormError({
                nameError:'This Field is required'
            })
            return isValid=false;
        }

        if(email === ''){
            setFormError({
                emailError:'This Field is required'
            })
            return isValid=false;
        }

        if(!email.includes('@')){
            setFormError({
                emailError:'Invalid Email'
            })
            return isValid=false;
        }

        return isValid;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
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
                                                inpValue={FormData.value}
                                                onInputChange={handleChange} 
                                                />
                                                {formError.nameError ? <span style={{color: "red"}}>{formError.nameError}</span> : ''}
                                            </div>
                                            <div className="form-group">
                                                <label for="">Email</label>
                                                <InputComponent 
                                                    inputType="email"
                                                    inputClassName='form-control'
                                                    inputName='email'
                                                    inpValue={FormData.value}
                                                    inputPlaceholder='Enter email address'
                                                    onInputChange={handleChange} 
                                                     />
                                                     {formError.emailError ? <span style={{color: "red"}}>{formError.emailError}</span> : ''}
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
                                                <button className="btn btn-primary btn-common btn-continue" onClick={handleContinue}>
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
    )
}

const mapDispatchToProps = dispatch => ({
        currentpage : payload => dispatch(setCurrentPage(payload))
})


export default connect(null, mapDispatchToProps)(UserRegistration);