import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Preview = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef(null);
  const [code, setCode] = useState({ htmlCode: "", cssCode: "", jsCode: "" });
  const debouncedCombinedCode = useDebounce(code, 500);

  const getCombinedCode = () => {
    return `
      <style>${cssCode}</style>
      <script>${jsCode}</script>
      ${htmlCode}
    `;
  };

  useEffect(() => {
    setCode({ htmlCode, cssCode, jsCode });
  }, [htmlCode, cssCode, jsCode]);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = getCombinedCode();
    }
  }, [debouncedCombinedCode]);

  return <iframe ref={iframeRef} sandbox="allow-scripts allow-same-origin" />;
};

export default Preview;
