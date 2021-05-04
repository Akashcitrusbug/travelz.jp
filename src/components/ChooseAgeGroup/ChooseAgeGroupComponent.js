import React, {useState} from 'react';
import Ages from '../../json_data/age.json';
import ChooseAgeGroupItem from './ChooseAgeGroupItem';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';


function ChooseAgeGroupComponent({currentpage}) {
    const initalError = {
        ageError:''
    }
    const [selectedAge, setSelectedAge] = useState('')
    const [ageError, setAgeEror] = useState(initalError)


    console.log(selectedAge,'selectedAge')

    const handleContinue = () => {
        let isValid = validate()
        console.log(isValid);
        if(isValid){
            currentpage({id:4, values: {selectedAge}})
        }
    }

    const validate = () => {
        let isValid=true;
        if(selectedAge === ''){
            setAgeEror({
                ageError:'Please select your age.'
            })
            isValid=false;
        }
        return isValid
    }

    const handleprevious = () => {
        currentpage({id:2})
    }
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
                                            return <ChooseAgeGroupItem agedata={age} index={index} onClick={(id) => setSelectedAge(age.age)} selectedId={selectedAge}/>
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
                                {ageError ? <span style={{color: "red"}}>{ageError.ageError}</span> : ''}

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

export default connect(null, mapDispatchToProps)(ChooseAgeGroupComponent)
