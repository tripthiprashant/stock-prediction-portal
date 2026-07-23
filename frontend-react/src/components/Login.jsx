import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErrors({});

        const userData = {
            username,
            password,
        };

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/v1/token/",
                userData
            );

            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            setIsLoggedIn(true);
            
            navigate("/");
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data);
            } else {
                setErrors({
                    detail: "Something went wrong. Please try again.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-dark p-5 rounded">

                    <h3 className="text-center text-white mb-4">
                        Login Your Account
                    </h3>

                    {errors.detail && (
                        <div className="alert alert-danger">
                            {errors.detail}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-info w-100"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;