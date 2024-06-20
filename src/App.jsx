import { useRef, useState } from "react";
import {
  cssInitialValue,
  htmlInitialValue,
  initialTheme,
  jsInitialValue,
} from "./constants/app-constants";
import { getCount, handleExport } from "./utils/app-utils";

import HTMLEditor from "./components/HTMLEditor";
import JavascriptEditor from "./components/JavascriptEditor";
import CSSEditor from "./components/CSSEditor";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";

import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  const contentRef = useRef();

  const [mode, setMode] = useState("web");

  const [htmlCode, setHmtlCode] = useState(htmlInitialValue);
  const [cssCode, setCssCode] = useState(cssInitialValue);
  const [jsCode, setJsCode] = useState(jsInitialValue);
  const [theme, setTheme] = useState(initialTheme);
  const [hideEditor, setHideEditor] = useState({
    html: false,
    css: false,
    javascript: false,
    count: 0,
  });

  const triggerExport = () => {
    handleExport({ htmlCode, cssCode, jsCode });
  };

  const onHideChange = (editor) => {
    setHideEditor((prev) => {
      let updated = { ...prev, [editor]: !prev[editor] };
      updated.count = getCount(updated);
      return updated;
    });
  };

  return (
    <main className="main-container">
      <Navbar
        setTheme={setTheme}
        contentRef={contentRef}
        triggerExport={triggerExport}
        setMode={setMode}
      />
      <article ref={contentRef} className="content-container">
        <section className="ediors-container">
          <HTMLEditor
            htmlCode={htmlCode}
            setHmtlCode={setHmtlCode}
            theme={theme}
            hideEditor={hideEditor}
            onHideChange={onHideChange}
            mode={mode}
          />
          <CSSEditor
            cssCode={cssCode}
            setCssCode={setCssCode}
            theme={theme}
            hideEditor={hideEditor}
            onHideChange={onHideChange}
            mode={mode}
          />
          <JavascriptEditor
            jsCode={jsCode}
            setJsCode={setJsCode}
            theme={theme}
            hideEditor={hideEditor}
            onHideChange={onHideChange}
            mode={mode}
          />
        </section>
        <section className="output-container">
          <Preview htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </section>
      </article>
    </main>
  );
};

export default App;
