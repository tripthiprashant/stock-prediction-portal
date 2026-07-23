import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Update auth state
    setIsLoggedIn(false);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <Link to="/" className="navbar-brand text-light">
        Stock Prediction Portal
      </Link>

      {isLoggedIn ? (
        <button
          className="btn btn-danger rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <div>
          <Link className="btn btn-outline-info" to="/login">
            Login
          </Link>

          &nbsp;

          <Link className="btn btn-info" to="/register">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;