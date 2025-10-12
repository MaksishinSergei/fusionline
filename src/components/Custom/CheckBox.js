import React from "react";

const CheckBox = ({checked, onChange, label,  color, disabledColor = "#ffad00",}) => {
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
        {label}
      </div>
    </label>
    );
}

export default CheckBox;