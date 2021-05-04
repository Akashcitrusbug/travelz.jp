import React, {useState} from 'react';
import ChooseOccupationItem from '../ChooseOccupation/ChooseOccupationItem';
import Occupation from '../../json_data/occupation.json';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';


function ChooseOccupationComponent({currentpage}) {
    const initalError = {
        occupationError:''
    }
    const [selectedOccupation, setSelectOccupation] = useState('')
    const [occupationError, setOccupationError] = useState(initalError)


    console.log(selectedOccupation,'selectedOccupation')

    const handleContinue = () => {
        let isValid = validate()
        console.log(isValid);
        if(isValid){
            currentpage({id:3, values: {selectedOccupation}})
        }
    }
    const handleprevious = () => {
            currentpage({id:1})
    }

    const validate = () => {
        let isValid=true;
        if(selectedOccupation === ''){
            setOccupationError({
                occupationError:'Atleast you should choose one occupation.'
            })
            isValid=false;
        }
        return isValid
    }
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
                                                return <ChooseOccupationItem 
                                                occupationdata={occupation} 
                                                index={index} 
                                                onClick={(id) => setSelectOccupation(occupation.occupation_name)} 
                                                selectedId={selectedOccupation}
                                                />
                                            })
                                        }
                                        </div>
                                    </div>

                                </div>
                                {occupationError ? <span style={{color: "red"}}>{occupationError.occupationError}</span> : ''}
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
             
    )
}

const mapDispatchToProps = dispatch => ({
        currentpage : payload => dispatch(setCurrentPage(payload))
})
// const mapStateToProps = state => {
//     return {
//         registerData: state.registerData
//     }
// }
export default connect(null, mapDispatchToProps)(ChooseOccupationComponent);
