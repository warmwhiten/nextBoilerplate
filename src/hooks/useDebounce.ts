import { useEffect, useState } from "react";

const DEFAULT_DELAY = 500;

function useDebounce<T>(value: T, delay: number = DEFAULT_DELAY) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      console.log("debounced value setting done");
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  });

  return debouncedValue;
}

export default useDebounce;
