import React, {useState} from 'react';
import ChooseAreaItem from './ChooseAreaItem';
import Area from '../../json_data/area.json';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

function ChooseAreComponent({currentpage}) {
    const [selectedArea, setSelectedArea] = useState([])
    const [areaError, setAreaEror] = useState('')
    const [serarchTerm, setSearchTerm] = useState('');
    // console.log(selectedArea,'selectedArea')

    const handleContinue = () => {
        let isValid = validate()
        // console.log(isValid);
        if(isValid){
            currentpage({id:5, values: {selectedArea}})
        }
    }

    const validate = () => {
        let isValid=true;
        console.log(selectedArea.length)
        if(selectedArea.length < 2){
            setAreaEror({
                areaError:'Please select atleast 2 area.'
            })
            isValid=false;
        }
        return isValid
    }
    const handleprevious = () => {
        currentpage({id:3})
    }

    const handleClick = name => {
        let selectedNames = selectedArea;

        if(!selectedNames.includes(name)){
            selectedNames.push(name);
        }else{
            selectedNames.splice(selectedNames.indexOf(name), 1);
        }
        console.log(selectedNames, 'final');
        setSelectedArea(selectedNames)
    }
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
                                            <input type="text" className="form-control" placeholder="Select Areas to Follow" onChange={(event)=>setSearchTerm(event.target.value)}/>
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
                                        Area.area.filter((val)=>{
                                            if (serarchTerm==""){
                                                return val;
                                            } else if (val.area_name.toLowerCase().includes(serarchTerm.toLowerCase())){
                                                return val
                                            }
                                        }).map((area, index)=>{
                                            return <ChooseAreaItem 
                                            key={index} 
                                            areadata={area} 
                                            index={index}  
                                            onClick={(id) => handleClick(id)} 
                                            selectedId={selectedArea}
                                        />
                                        })
                                    }
                                </div>
                            </div>
                            {areaError ? <span style={{color: "red"}}>{areaError.areaError}</span> : ''}

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
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    currentpage : payload => dispatch(setCurrentPage(payload))
})

export default connect(null, mapDispatchToProps)(ChooseAreComponent)