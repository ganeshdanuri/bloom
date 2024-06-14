import { useEffect, useState } from "react";

const useDebounce = (code, delay) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(code);
    }, [delay]);

    return () => {
      clearTimeout(timer);
    };
  }, [code]);

  return value;
};

export default useDebounce;
