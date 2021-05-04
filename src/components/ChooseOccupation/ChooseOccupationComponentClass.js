import React, { Component } from 'react';
import ChooseOccupationItem from '../ChooseOccupation/ChooseOccupationItem';
import Occupation from '../../json_data/occupation.json';

class ChooseOccupationComponentClass extends Component {
    render() {
        return (
            <div className="common-div occupation-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Choose Occupation</h2>
                                        <p>Enter user name or email and why you want to join!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">

                                    <div className="select-img-root">
                                        <div className="row get-row mr-minus-8">
                                        {
                                            Occupation.occupation.map((occupation, index)=>{
                                                return <ChooseOccupationItem key={index} occupationdata={occupation} />
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

export default ChooseOccupationComponentClass;
