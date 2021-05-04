import React from 'react';
import headerimage from '../../assets/images/logo.png'

function Header() {
    return (
        <header>
            <div className="header-div clearfix" >
                <div className="inner-top-header-div clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="header-container">

                                    <div className="logo-div">
                                        <a className="logo_link clearfix" href="index.html">
                                            <img src={headerimage} data-logo-loader className="img-fluid logo_img main-logo" alt="logo" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </header>
    )
}

export default Header
