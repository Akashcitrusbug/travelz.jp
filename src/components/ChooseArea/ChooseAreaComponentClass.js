import React, { Component } from 'react';
import ChooseAreaItem from './ChooseAreaItem';
import Area from '../../json_data/area.json';

class ChooseAreaComponentClass extends Component {
    render() {
        return (
            <div className="common-div areas-div">
        <div className="container">
            <div className="row">

                <div className="col-lg-12 col-md-12">        

                    <div className="common-card-div">
                        
                        <div className="heading-top-row">
                            <div className="heading-div"> 
                                <h2>Select Areas to Follow</h2>
                                <p>Select area and continue!</p>
                            </div>
                        </div>

                        <div className="main-body-div">
                            
                            <div className="search-box-root">
                                <div className="row get-row mr-minus-8">
                                    <div className="col-lg-12 col-md-12 plr-8">
                                        <div className="input-group input-group-30">
                                            <input type="text" className="form-control" placeholder="Select Areas to Follow" />
                                            <div className="input-group-append">
                                                <button className="btn btn-success btn-search"><i className="material-icons search-icons"> search </i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>        

                            <div className="select-img-root most-img-root">
                                <div className="row get-row mr-minus-8">
                                    <div className="col-lg-12 col-md-12 plr-8">
                                        <div className="heading-h4"><h4>Most popular Area</h4></div>
                                    </div>
                                </div>
                                <div className="row get-row mr-minus-8">
                                    {
                                        Area.area.map((area, index)=>{
                                            return <ChooseAreaItem key={index} areadata={area} />
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

export default ChooseAreaComponentClass
