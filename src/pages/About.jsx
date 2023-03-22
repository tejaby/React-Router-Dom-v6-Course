import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
      <Link to="welcome">say welcome</Link>
      <Link to="goodbye">say goodbye</Link>
    </div>
  );
}

export default About;
