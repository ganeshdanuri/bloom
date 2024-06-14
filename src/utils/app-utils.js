import JSZip from "jszip";

export const enterFullscreen = (contentRef) => {
  const elem = contentRef.current;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    elem.webkitRequestFullscreen();
  }
};

export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  }
};

export const handleExport = ({ htmlCode, cssCode, jsCode }) => {
  var zip = new JSZip();

  zip.file("index.html", htmlCode);
  zip.file("index.css", cssCode);
  zip.file("index.js", jsCode);

  zip.generateAsync({ type: "blob" }).then(function (content) {
    var link = document.createElement("a");
    link.download = "bundle.zip";
    link.href = URL.createObjectURL(content);
    link.click();
  });
};

export const getCount = (updated) => {
  return Object.values(updated).filter((key) => key === true).length;
};

export const getLabel = (type) => {
  return type === "html" ? "HTML" : type === "css" ? "CSS" : "Javascript";
};

export const getHeight = (hide, hideEditor) => {
  const { count } = hideEditor;
  const height = hide
    ? "4%"
    : count === 2
    ? "99%"
    : count === 1
    ? "48%"
    : "33%";

  return height;
};
