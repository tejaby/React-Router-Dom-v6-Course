import { Link } from "react-router-dom";

import "./pages.css";

function Home() {
  const user = 10;
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">Users</Link>
      {/* <Link to={`/user/${user}`}>Users</Link> */}
    </div>
  );
}

export default Home;
