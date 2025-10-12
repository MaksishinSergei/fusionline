import React from "react";

const CheckBoxInput = ({checked, onChange, label, color, disabledColor = "#ffad00", value, onInputChange}) => {
    return(
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form__input-checkbox"
      />
      <span
        className="checkbox__custom"
        style={{
          "--active-color": color,
          "--disabled-color": disabledColor,
        }}
      ></span>
      <div className="checkbox__container">
        <input 
          type="number" 
          placeholder={label} 
          className="checkbox__container-input"
          value={value || ""}
          onChange={onInputChange}
          disabled={!checked}
        />
      </div>
    </label>
    );
}

export default CheckBoxInput;