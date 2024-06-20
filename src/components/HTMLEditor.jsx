import React, { useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import EditorTitle from "./EditorTitle";
import { getHeight } from "../utils/app-utils";

const HTMLEditor = (props) => {
  const { htmlCode, setHmtlCode, theme, onHideChange, hideEditor, mode } =
    props;

  if (mode !== "web") return null;

  const onChange = React.useCallback((val, viewUpdate) => {
    setHmtlCode(val);
  }, []);

  const hide = hideEditor.html;
  const height = getHeight(hide, hideEditor, mode);

  return (
    <div className="editor-container" style={{ height }}>
      <EditorTitle onHideChange={onHideChange} type="html" hide={hide} />
      {!hide && (
        <CodeMirror
          value={htmlCode}
          height="100%"
          extensions={[html()]}
          onChange={onChange}
          theme={theme}
        />
      )}
    </div>
  );
};
export default HTMLEditor;
