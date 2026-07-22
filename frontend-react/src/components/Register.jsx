import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading,setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess("");

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );

      console.log(response.data);

      setSuccess("Registration Successful!");

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        setErrors({
          network: ["Unable to connect to the server."],
        });
      }
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-dark p-5 rounded">

          <h3 className="text-center text-white mb-4">
            Create Your Account
          </h3>

          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          {errors.network && (
            <div className="alert alert-danger">
              {errors.network[0]}
            </div>
          )}

          {errors.non_field_errors && (
            <div className="alert alert-danger">
              {errors.non_field_errors[0]}
            </div>
          )}

          <form onSubmit={handleRegistration}>

            {/* Username */}
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username[0]}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email[0]}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password[0]}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-info w-100"
              disabled={loading}
            >
              {loading ?"Registering...": "Register"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;