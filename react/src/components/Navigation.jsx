import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/About">About</Link> |{" "}
      <Link to="/user/101">User 101</Link>
    </nav>
  );
}
