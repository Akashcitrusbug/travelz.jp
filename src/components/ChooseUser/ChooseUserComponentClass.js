import React, { Component } from 'react';
import ChooseUserItem from './ChooseUserItem';
import User from '../../json_data/user.json';

class ChooseUserComponentClass extends Component {
    render() {
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
                                        <div className="row get-row mr-minus-8">
                                            {
                                                User.user.map((user, index)=>{
                                                    return <ChooseUserItem key={index} userdata={user} />
                                                })
                                            }
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

export default ChooseUserComponentClass
