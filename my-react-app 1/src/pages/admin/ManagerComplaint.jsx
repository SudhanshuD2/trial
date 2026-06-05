import { Link, useNavigate } from "react-router-dom";

function ManagerComplaint() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <h1>Admin City manager</h1>
  );
}

export default ManagerComplaint;