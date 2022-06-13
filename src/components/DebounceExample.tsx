import { useDebounce } from "@src/hooks";
import { useEffect, useState } from "react";

function debounceExample() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 300);

  return <input placeholder="hi" />;
}
