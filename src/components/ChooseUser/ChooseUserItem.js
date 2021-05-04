import React from 'react';

function ChooseUserItem(props) {
    return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
            <div className="user-card-box follow-card-box">
                <label for="select-follow-option15" className="label-box" onClick={() => props.onClick(props.userdata.username)}>
                    <div className="check-box-position">
                        <button className="checkbox-round-div">
                            <i className="fe fe-check fe-custom"></i>
                        </button>
                    </div>
                    <div className="img-user-thumb">
                        <img src={props.userdata.image} className="img-fluid img-user" alt="follow" />
                    </div>
                    <div className="check-title-row">
                        <h4>{props.userdata.username}</h4>
                        <p>{props.userdata.email}</p>
                    </div>
                </label>
                <input type="checkbox" className="form-checkbox form-checkbox-follow" id="select-follow-option15" />
            </div>
        </div>
    )
}

export default ChooseUserItem;
