import React, { Component } from 'react';
import WhatToDoNextItem from './WhatToDoNextItem';
import WhatTodoNextData from '../../json_data/whattodonext.json';

class WhatToDoNextComponentClass extends Component {
    render() {
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
                                                    return <WhatToDoNextItem key={index} whattodonext={card} />
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

export default WhatToDoNextComponentClass
