import React from "react";

const SwitchButtonTheme = ({changeTheme, handleToggleSwitch, darkImage, lightImage}) => {
    return(
        <>
            <input
                checked={changeTheme}
                onChange={handleToggleSwitch}
                className="switch__checkbox-header"
                id={`switch`}
                type="checkbox"
            />
            <label
                className="switch__label-header"
                htmlFor={`switch`}
            >
                <span className={`switch__btn-header`} />
            </label>
        </>
    );
}

export default SwitchButtonTheme;