import React, { useState } from "react";
import { initalLabel, themeList, themes } from "../constants/app-constants";
import { enterFullscreen, exitFullscreen } from "../utils/app-utils";
import { Tooltip } from "react-tooltip";

const Navbar = ({ contentRef, setTheme, triggerExport }) => {
  const [showThemes, setShowThemes] = useState(false);
  const [label, setLabel] = useState(initalLabel);

  const handleListClick = (e) => {
    setTheme(themes[e.target.id]);
    setLabel(e.target.innerText);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen(contentRef);
    } else {
      exitFullscreen();
    }
  };

  return (
    <nav className="navbar-container">
      <div className="items-center">
        <img src="./logo.svg" className="logo" />
        <h1 className="logo-title">Bloom</h1>
      </div>
      <div className="d-flex">
        <div className="actions-container h-100 items-center p-10">
          <Tooltip id="export-zip" />
          <img
            src="./zip.svg"
            onClick={triggerExport}
            className="action"
            data-tooltip-id="export-zip"
            data-tooltip-content="Export"
          />
          <Tooltip id="full-screen" />
          <img
            src="./fullscreen.svg"
            onClick={handleFullscreen}
            className="action"
            data-tooltip-id="full-screen"
            data-tooltip-content="Full Screen"
          />
        </div>
        <div className="h-100" onMouseLeave={() => setShowThemes(false)}>
          <div className="theme" onClick={() => setShowThemes((prev) => !prev)}>
            <span>{label}</span>
            <div className="items-center">
              <img
                src={showThemes ? "./upArrow.svg" : "./downArrow.svg"}
                className="down-arrow"
              />
              <img src="./theme.svg" />
            </div>
          </div>
          {showThemes && (
            <ul className="select-theme" onClick={handleListClick}>
              {themeList.map((eachTheme) => {
                return (
                  <li
                    id={eachTheme.value}
                    key={eachTheme.value}
                    className="each-theme"
                  >
                    {eachTheme.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
