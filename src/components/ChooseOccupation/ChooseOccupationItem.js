import React from 'react';

function ChooseOccupationItem(props) {
    console.log(props.selectedId)
    return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
            <div className={`radio-card-box occupation-card-box ${props.selectedId === props.occupationdata.occupation_name ? 'active' : ''}`} >
                <label for="opt-radio02" className="label-box" onClick={() => props.onClick(props.index)}>
                    <div className={`icon-img-thumb `}>
                        <i className={`custom-icon ${props.occupationdata.icon_name}`}></i>
                    </div>
                    <div className="title-row">
                        <p>{props.occupationdata.occupation_name}</p>
                    </div>
                </label>
                <input type="radio" className="form-radio form-radio-occupation" id="opt-radio02" name="occupation-select" />
            </div>
        </div>
    )
}

export default ChooseOccupationItem;
