import React from 'react'

function chooseAreaItem(props) {
    return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
        <div className={`img-checkbox-card-box area-card-box ${props.selectedId.includes(props.areadata.area_name) ? 'selected' : ''}`} >
            <label for="select-area-option01" className="label-box" onClick={() => props.onClick(props.areadata.area_name)}>
                <div className="check-box-position">
                    <button className="checkbox-round-div">
                        <i className="fe fe-check fe-custom"></i>
                    </button>
                </div>
                <div className="img-banner">
                    <img src={props.areadata.image} className="img-fluid img-responsive" alt="area" />
                </div>
                <div className="check-title-row">
                    <h4>{props.areadata.area_name}</h4>
                </div>
            </label>
            <input type="checkbox" className="form-checkbox form-checkbox-areas" id="select-area-option01"/>
        </div>
    </div>
    )
}

export default chooseAreaItem
