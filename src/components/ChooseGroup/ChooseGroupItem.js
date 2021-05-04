import React from 'react'

function ChooseGroupItem(props) {
    return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
        <div className="img-checkbox-card-box groups-card-box">
            <label for="select-groups-option01" className="label-box" onClick={() => props.onClick(props.groupdata.name)}>
                <div className="check-box-position">
                    <button className="checkbox-round-div">
                        <i className="fe fe-check fe-custom"></i>
                    </button>
                </div>
                <div className="img-banner">
                    <img src={props.groupdata.image} className="img-fluid img-responsive" alt="groups" />
                </div>
                <div className="check-title-row">
                    <h4>{props.groupdata.name}</h4>
                </div>
            </label>
            <input type="checkbox" className="form-checkbox form-checkbox-groups" id="select-groups-option01" />
        </div>
    </div>

    )
}

export default ChooseGroupItem
