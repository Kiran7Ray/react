import { useParams } from "react-router-dom";

export default function UserProfile() {
  const params = useParams();

  return <h3>User ID: {params.userId}</h3>;
}
