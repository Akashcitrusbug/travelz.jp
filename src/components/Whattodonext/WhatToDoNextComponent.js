import React, { useState } from 'react';
import WhatToDoNextItem from './WhatToDoNextItem';
import WhatTodoNextData from '../../json_data/whattodonext.json';
import { connect } from 'react-redux'
import { setCurrentPage } from '../../redux/actions';

function WhatToDoNextComponent({currentpage}) {
    const initalError = {
        whatToDoNextError:''
    }
    const [selectedWhatToDoNext, setselectedWhatToDoNext] = useState('')
    const [whatToDoNextError, setWhatToDoNextError] = useState(initalError)

    console.log(selectedWhatToDoNext);
    const handleContinue = () => {
        let isValid = validate()
        console.log(isValid);
        if(isValid){
            currentpage({id:9, values: {selectedWhatToDoNext}})
        }
    }

    const validate = () => {
        let isValid=true;
        if(selectedWhatToDoNext === ''){
            setWhatToDoNextError({
                whatToDoNextError:'Please select what to do.'
            })
            isValid=false;
        }
        return isValid
    }

    const handleprevious = () => {
        currentpage({id:7})
    }
    return (
        <div className="common-div what-to-do-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>What to do next</h2>
                                        <p>Choose option and continue!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">

                                    <div className="select-img-root">
                                        <div className="row get-row mr-minus-8 justify-content-center">
                                            {
                                                WhatTodoNextData.whattodonext.map((card, index)=>{
                                                    return <WhatToDoNextItem key={index} whattodonext={card} index={index} onClick={(id) => setselectedWhatToDoNext(card.cardname)} selectedId={selectedWhatToDoNext} />
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                                {whatToDoNextError ? <span style={{color: "red"}}>{whatToDoNextError.whatToDoNextError}</span> : ''}

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
    )
}

const mapDispatchToProps = dispatch => ({
    currentpage : payload => dispatch(setCurrentPage(payload))
})

export default connect(null, mapDispatchToProps)(WhatToDoNextComponent);
