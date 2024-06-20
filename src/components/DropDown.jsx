import React, { useState } from "react";

const DropDown = ({ onChange, icon, options, initialLabel }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [label, setLabel] = useState(initialLabel);

  const handleListClick = (e) => {
    setLabel(e.target.innerText);
    onChange(e.target.id);
  };

  return (
    <div className="h-100" onMouseLeave={() => setShowDropDown(false)}>
      <div className="theme" onClick={() => setShowDropDown((prev) => !prev)}>
        {icon}
        <span>{label}</span>
        <div className="items-center">
          <img
            src={showDropDown ? "./upArrow.svg" : "./downArrow.svg"}
            className="down-arrow"
          />
        </div>
      </div>
      {showDropDown && (
        <ul className="select-theme" onClick={handleListClick}>
          {options.map((option) => {
            return (
              <li id={option.value} key={option.value} className="each-theme">
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
