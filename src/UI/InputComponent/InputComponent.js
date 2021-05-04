import React from 'react';
import '../../assets/css/style.css'

const InputComponent = (props) => {
  return (
    <React.Fragment>
      <span className="custom-icon">
        <span className={`material-icons ${props.icon ? props.icon : ''}`}>
          {props.icon ? props.iconName : ''}
        </span>
      </span>
      <div className="form-group-control">
        <input
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          id={props.inputID}
          name={props.inputName}
          className={props.inputClassName}
          value={props.inpValue}
          readOnly={props.inpReadonly}
          disabled={props.inpDisabled}
          size={props.inpSize}
          accept={props.InpAccept}
          required={props.inpRequired}
          autoFocus={props.inpAutofocus}
          height={props.inpHeight}
          width={props.inpWidth}
          onClick={props.handleOnclick}
          onChange={props.onInputChange}
          onFocus={props.handleInpfocus}
          onInput={props.handleOninput}
          onSubmit={props.handleOnsubmit}
          onMouseOut={props.handleMouseout}
        />
      </div>
    </React.Fragment>
  );
};

export default InputComponent;

