import React from 'react';
import UserRegistration from '../components/UserRegistration/UserRegistration';
import ChooseOccupationComponent from '../components/ChooseOccupation/ChooseOccupationComponent'
import ChooseAgeGroupComponent from '../components/ChooseAgeGroup/ChooseAgeGroupComponent'
import ChooseAreaComponent from '../components/ChooseArea/ChooseAreaComponent'
import ChooseUserComponent from '../components/ChooseUser/ChooseUserComponent'
import ChooseGroupComponent from '../components/ChooseGroup/ChooseGroupComponent'
import PasswordComponent from '../components/PasswordComponent/PasswordComponent'
import WhatToDoNextComponent from '../components/Whattodonext/WhatToDoNextComponent'
import FinalComponent from '../components/FinalComponent';

import { connect } from 'react-redux'

import '../assets/css/style.css'

function Registration({currentpage}) {
    console.log(currentpage,'-------------')
    const multiStepform = () => {
        switch (currentpage) {
            case 1:
              return ( 
                < UserRegistration/>
              )
            case 2:
              return ( 
                < ChooseOccupationComponent/>
              )
            case 3:
              return ( 
                < ChooseAgeGroupComponent/>
              )
            case 4:
              return ( 
                < ChooseAreaComponent/>
              )
            case 5:
              return ( 
                < ChooseUserComponent/>
              )
            case 6:
              return ( 
                < ChooseGroupComponent/>
              )
            case 7:
              return ( 
                < PasswordComponent/>
              )
            case 8:
              return ( 
                < WhatToDoNextComponent/>
              )
            case 9:
              return ( 
                < FinalComponent/>
              )
            default:
              return ( 
                < UserRegistration/>
              )
    }
}
    return (
            <div className="main-middle-area">
                <section className="common-section">
                    <div className="background-image-full"></div>
                    {multiStepform()}
                </section>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        currentpage:  state.currentpage,
        registerData: state.registerData
    }
}


export default connect(mapStateToProps, null)(Registration);
