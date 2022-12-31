import { useState, useEffect } from "react";

export const useDebounce = (initialValue, delay) => {
  const [debounceValue, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(initialValue);
    }, delay);
    return () => clearTimeout(handler);
  }, [initialValue, delay]);

  return { debounceValue };
};
