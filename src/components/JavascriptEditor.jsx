import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import EditorTitle from "./EditorTitle";
import { getHeight } from "../utils/app-utils";

function JavascriptEditor(props) {
  const { hideEditor, onHideChange, jsCode, setJsCode, theme, mode } = props;

  const onChange = React.useCallback((val, viewUpdate) => {
    setJsCode(val);
  }, []);

  const hide = hideEditor?.javascript;
  const height = getHeight(hide, hideEditor, mode);

  return (
    <div className="editor-container" style={{ height }}>
      <EditorTitle onHideChange={onHideChange} type="javascript" hide={hide} />
      {!hide && (
        <CodeMirror
          value={jsCode}
          height="100%"
          extensions={[javascript()]}
          onChange={onChange}
          theme={theme}
        />
      )}
    </div>
  );
}

export default JavascriptEditor;
