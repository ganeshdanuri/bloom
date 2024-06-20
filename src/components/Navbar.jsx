import {
  initalModeLabel,
  initalThemeLabel,
  modeList,
  themeList,
  themes,
} from "../constants/app-constants";
import { enterFullscreen, exitFullscreen } from "../utils/app-utils";
import { Tooltip } from "react-tooltip";
import DropDown from "./DropDown";

const Navbar = ({ contentRef, setTheme, triggerExport, setMode }) => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen(contentRef);
    } else {
      exitFullscreen();
    }
  };

  const onThemeChange = (value) => {
    setTheme(themes[value]);
  };

  const onModeChange = (value) => {
    setMode(value);
  };

  return (
    <nav className="navbar-container">
      <div className="items-center">
        <img src="./logo.svg" className="logo" />
        <h1 className="logo-title">Bloom</h1>
      </div>
      <div className="d-flex">
        <DropDown
          options={modeList}
          onChange={onModeChange}
          icon={<img src="./web.svg" />}
          initialLabel={initalModeLabel}
        />
        <DropDown
          options={themeList}
          onChange={onThemeChange}
          icon={<img src="./theme.svg" />}
          initialLabel={initalThemeLabel}
        />
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
      </div>
    </nav>
  );
};

export default Navbar;
