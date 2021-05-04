import React from 'react'

function WhatToDoNextItem(props) {
    return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
            <div className="radio-card-box what-to-do-card-box" style={{border: props.selectedId === props.whattodonext.cardname ? '1px solid blue' : ''}}>
                <label for="what-to-do-radio01" className="label-box" onClick={() => props.onClick(props.index)}>
                    <div className="icon-img-thumb">
                        <i className={props.whattodonext.iconname}></i>
                    </div>
                    <div className="title-row">
                        <p>{props.whattodonext.cardname}</p>
                    </div>
                </label>
                <input type="radio" className="form-radio form-radio-what-to-do" id="what-to-do-radio01" name="what-to-do-select" />
            </div>
        </div>
    )
}

export default WhatToDoNextItem
