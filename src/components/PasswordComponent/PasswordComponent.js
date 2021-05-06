import React, { useState} from 'react';
import InputComponent from '../../UI/InputComponent/InputComponent';
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions';

function PasswordComponent({currentpage}) {
    const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    const initialState = {
        password:'',
        confirmpassword:''
    }
    const initalError = {
        passwdError:'',
        confirmpasswdError:''
    }

    const [selectedPassword, setSelectedPassword] = useState(initialState)
    const [passError, setPassErrro] = useState(initalError)

    const [isPasswordvisible, setPassworddVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const { password, confirmpassword } = selectedPassword
    const {passwdError, confirmpasswdError} = passError


    const handlePasswordVisiblity = () => {
        setPassworddVisible(!isPasswordvisible);
      };
    const handleConfirmPasswordVisiblity = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

      const handleContinue = () => {
        console.log(password,'=======',confirmpassword);
          let isValid = validatepasswd()
          if (isValid){
              console.log('validate password');
              currentpage({id:8, values: {password}})
          }
          else{
              console.log('invalid passwrod');
          }

      }

      const validatepasswd = () => {
          let isValid = true;
          console.log(password,'=======',confirmpassword);
          if(password===''){
            setPassErrro({
                passwdError:"This field is required."
            })
            return isValid=false;
          }

          if(confirmpassword===''){
            setPassErrro({
                confirmpasswdError:"This field is required."
            })
            return isValid=false;
          }

          if(!passwdRegex.test(password)){
              console.log('in test password ');
             setPassErrro({
                 passwdError:"Please use a Capital letter, a small letter and a number in your password."
             })
             return isValid=false;
          }
          if(!passwdRegex.test(confirmpassword)){
            setPassErrro({
                confirmpasswdError:"Please use a Capital letter, a small letter and a number in your password."
            })
            return isValid=false;
          }
          if(password!==confirmpassword){
            setPassErrro({
                confirmpasswdError:"Password doesnot match."
            })
            return isValid=false;
          }
          return isValid
      }
      const handleprevious = () => {
        currentpage({id:6})
    }

    const handleChange = (e) => {
    setSelectedPassword({
        ...selectedPassword,
        [e.target.name]: e.target.value,
        });
    };
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
                                                                inputType={isPasswordvisible ? 'text' : 'password'}
                                                                inputClassName='form-control'
                                                                inputPlaceholder="Enter password"
                                                                inputID='password'
                                                                inpValue={selectedPassword.value}
                                                                onInputChange={handleChange}
                                                                inputName='password' />
                                                            <button 
                                                                type="button" 
                                                                id="show_password" 
                                                                name="show_password" 
                                                                className="pass-hide password-view-click" 
                                                                onClick={handlePasswordVisiblity}>
                                                                    <span
                                                                        className={`pass-custom-icon material-icons ${isPasswordvisible ? 'password-hide' : 'password-view'}`}>
                                                                            {`${isPasswordvisible ? 'visibility' : 'visibility_off'}`}
                                                                            </span>
                                                                    </button>                                                            
                                                        </div>
                                                        {passError.passwdError ? <span style={{color: "red"}}>{passError.passwdError}</span> : ''}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 plr-8">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Confirm password</label>
                                                        <div className="input-group-box password-box">
                                                        <InputComponent 
                                                                inputType={isConfirmPasswordVisible ? 'text' : 'password'}
                                                                inputClassName='form-control'
                                                                inputPlaceholder="Enter confirm password"
                                                                inputID='confirm-password'
                                                                inpValue={selectedPassword.value}
                                                                onInputChange={handleChange}
                                                                inputName='confirmpassword' />
                                                        <button 
                                                                type="button" 
                                                                id="show_password2" 
                                                                name="show_password" 
                                                                className="pass-hide password-view-click" 
                                                                onClick={handleConfirmPasswordVisiblity}>
                                                                    <span
                                                                        className={`pass-custom-icon material-icons ${isConfirmPasswordVisible ? 'password-hide' : 'password-view'}`}>
                                                                            {`${isConfirmPasswordVisible ? 'visibility' : 'visibility_off'}`}
                                                                            </span>
                                                                    </button>
                                                        </div>
                                                        {passError.confirmpasswdError ? <span style={{color: "red"}}>{passError.confirmpasswdError}</span> : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div style={{color:'#cc9900'}}>Password must contain: <br /><br />1. Minimum 8 characters <br />2. A Capital letter <br />3. A Small letter <br />4. A Number.</div> */}

                                    </div>

                                </div>

                            </div>
                            <div className="footer-bottom-row">
                                <div className="container">
                                    <div className="row mr-minus-8">
                                        <div className="col-lg-12 plr-8">
                                            <div className="button-row">
                                                <div className="btn-left-side justify-content-between"> 
                                                    <button className="btn btn-outline-primary btn-common btn-previous" onClick={handleprevious}>
                                                        <i className="fe fe-arrow-left fe-icon"></i>
                                                        <span className="text-span">Previous</span>
                                                    </button>
                                                    <a href="#" className="btn btn-link btn-skip mr-30">Skip <span className="remove-mobile">to End of </span>Process!</a>
                                                </div>
                                                <div className="btn-right-side"> 
                                                    <button className="btn btn-primary btn-common btn-continue" onClick={handleContinue}>
                                                        <span className="text-span" >Continue</span>
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
    )
}

const mapDispatchToProps = dispatch => ({
    currentpage : payload => dispatch(setCurrentPage(payload))
})


export default connect(null, mapDispatchToProps)(PasswordComponent);
