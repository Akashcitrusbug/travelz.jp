import React from 'react'

function ChooseAgeGroupItem(props) {
    return (
        <div className="col-lg-2 col-md-2 grid-125 plr-8">
            <div className={`radio-card-box age-group-card-box ${props.selectedId === props.agedata.age ? 'active' : ''}`}>
                <label for="opt-age-group02" className="label-box" onClick={() => props.onClick(props.index)}>
                    <div className="title-row">
                        <p>{props.agedata.age}</p>
                    </div>
                </label>
                <input type="radio" className="form-radio form-radio-age-group" id="opt-age-group02" name="age-group-select" />
            </div>
        </div>
    )
}

export default ChooseAgeGroupItem
