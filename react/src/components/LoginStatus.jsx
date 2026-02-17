import { useState } from "react";

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>

      {isLoggedIn && <p>You have 3 new messages</p>}
      {!isLoggedIn && <p>Log in to see your messages</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
