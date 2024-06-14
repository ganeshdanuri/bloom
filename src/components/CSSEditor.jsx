import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import EditorTitle from "./EditorTitle";
import { getHeight } from "../utils/app-utils";

function CSSEditor(props) {
  const { cssCode, setCssCode, theme, onHideChange, hideEditor } = props;

  const onChange = React.useCallback((val, viewUpdate) => {
    setCssCode(val);
  }, []);

  const hide = hideEditor.css;
  const height = getHeight(hide, hideEditor);

  return (
    <div className="editor-container" style={{ height }}>
      <EditorTitle onHideChange={onHideChange} type="css" hide={hide} />
      {!hide && (
        <CodeMirror
          value={cssCode}
          height="100%"
          extensions={[css()]}
          onChange={onChange}
          theme={theme}
        />
      )}
    </div>
  );
}

export default CSSEditor;
