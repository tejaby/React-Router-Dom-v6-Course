import { useParams } from "react-router-dom";

function User() {
  const { id, user } = useParams();

  return (
    <div>
      <h1>User</h1>
      <h2>id: {id}</h2>
      <h2>user: {user}</h2>
    </div>
  );
}

export default User;
