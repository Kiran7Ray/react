import { useRef, useState } from "react";

export default function FocusInput() {
  const inputRef = useRef();
  const [name, setName] = useState("");

  return (
    <div>
      <input ref={inputRef} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <p>Name: {name}</p>
    </div>
  );
}
