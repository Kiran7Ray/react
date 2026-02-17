import { useState } from "react";
import Parent from "./Parent";

export default function Grandparent() {
  const [userName] = useState("Kiran phuyal");

  return (
    <div>
      <h3>Props Drilling Example</h3>
      <Parent userName={userName} />
    </div>
  );
}
