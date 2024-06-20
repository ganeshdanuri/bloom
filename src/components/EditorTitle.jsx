const EditorTitle = ({ type, onHideChange, hide }) => {
  const handleClick = () => {
    onHideChange(type);
  };
  return (
    <div className="editor-title">
      <img
        src={`./${type}.svg`}
        style={{ marginLeft: type === "html" && "5px" }}
      />
      {hide ? (
        <img src="./plus.svg" onClick={handleClick} className="hide-add" />
      ) : (
        <img src="./minus.svg" onClick={handleClick} className="hide-add" />
      )}
    </div>
  );
};

export default EditorTitle;
