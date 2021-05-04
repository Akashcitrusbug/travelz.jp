import React, { Component } from 'react';
import Ages from '../../json_data/age.json';
import ChooseAgeGroupItem from './ChooseAgeGroupItem';

class ChooseAgeGroupComponentClass extends Component {
    render() {
        return (
            <div className="common-div age-group-div">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12">        

                        <div className="common-card-div">
                            
                            <div className="heading-top-row">
                                <div className="heading-div"> 
                                    <h2>Choose Age Group</h2>
                                    <p>Select age group and continue!</p>
                                </div>
                            </div>

                            <div className="main-body-div main-body-div2">

                                <div className="select-img-root select-label-root">
                                    <div className="row get-row mr-minus-8">
                                    {
                                        Ages.age.map((age, index)=>{
                                            return <ChooseAgeGroupItem key={index} agedata={age} />
                                        })
                                    }
                                    </div>
                                    <div className="row get-row mr-minus-8">
                                        <div className="col-lg-12 col-md-12 plr-8">
                                            <div className="checkbox-select-root">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                                                    <label className="custom-control-label" for="customCheck">Undisclosed age</label>
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

export default ChooseAgeGroupComponentClass
