import React, { useState } from 'react';
import ChooseUserItem from './ChooseUserItem';
import User from '../../json_data/user.json';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

function ChooseUserComponent({currentpage}) {

    const [selectedUser, setSelectedUser] = useState([])
    const [userError, setUserError] = useState('')


    console.log(selectedUser,'selectedUser')

    const handleContinue = () => {
        let isValid = validate()
        console.log(isValid);
        if(isValid){
            currentpage({id:6, values: {selectedUser}})
        }
    }

    const validate = () => {
        let isValid=true;
        console.log(selectedUser.length)
        if(selectedUser.length < 3){
            setUserError({
                userError:'Please select atleast 3 User.'
            })
            isValid=false;
        }
        return isValid
    }

    const handleClick = user => {
        let selectedUsers = selectedUser;

        if(!selectedUsers.includes(user)){
            selectedUsers.push(user);
        }else{
            selectedUsers.splice(selectedUsers.indexOf(user), 1);
        }
        console.log(selectedUsers, 'final');
        setSelectedUser(selectedUsers)
    }

    const handleprevious = () => {
        currentpage({id:4})
    }
    return (
        <div className="common-div follow-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Select Users to Follow</h2>
                                        <p>Select user and continue!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">
                                    
                                    <div className="search-box-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="input-group input-group-30">
                                                    <input type="text" className="form-control" placeholder="Select User to Follow" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-success btn-search"><i className="material-icons search-icons"> search </i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                    
                                    <div className="select-img-root most-img-root popular-user-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="heading-h4"><h4>Most popular User</h4></div>
                                            </div>
                                        </div>
                                        {userError ? <span style={{color: "red"}}>{userError.userError}</span> : ''}
                                        <div className="row get-row mr-minus-8">
                                            {
                                                User.user.map((user, index)=>{
                                                    return <ChooseUserItem 
                                                    key={index} 
                                                    userdata={user} 
                                                    index={index}  
                                                    onClick={(id) => handleClick(id)} 
                                                    selectedId={selectedUser}
                                                    />
                                                })
                                            }
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
    )
}

const mapDispatchToProps = dispatch => ({
    currentpage : payload => dispatch(setCurrentPage(payload))
})

export default connect(null, mapDispatchToProps)(ChooseUserComponent)
