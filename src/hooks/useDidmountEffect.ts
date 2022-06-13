import { useEffect, useRef } from "react";

function useDidmountEffect(func, deps) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, []);
}
