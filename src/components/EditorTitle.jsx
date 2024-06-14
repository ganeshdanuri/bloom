import React from "react";
import { getLabel } from "../utils/app-utils";

const EditorTitle = ({ type, onHideChange, hide }) => {
  const handleClick = () => {
    onHideChange(type);
  };

  return (
    <div className="editor-title">
      <span>{getLabel(type)}</span>
      {hide ? (
        <img src="./plus.svg" onClick={handleClick} className="hide-add" />
      ) : (
        <img src="./minus.svg" onClick={handleClick} className="hide-add" />
      )}
    </div>
  );
};

export default EditorTitle;
