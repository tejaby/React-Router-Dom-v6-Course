import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>DashBoard</h1>

      <button onClick={handleClick}>LogOut</button>
    </div>
  );
}

export default DashBoard;
