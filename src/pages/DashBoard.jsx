import { useNavigate, Routes, Route, Link } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>DashBoard</h1>

      <Link to="welcome">SubComponente </Link>

      <Routes>
        <Route path="welcome" element={<p>Welcome</p>} />
      </Routes>

      <button onClick={handleClick}>LogOut</button>
    </div>
  );
}

export default DashBoard;
