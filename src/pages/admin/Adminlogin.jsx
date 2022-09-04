import React from "react";
import logo from "../../assets/logo.png";
import AdminPanel from "./AdminPanel.jsx";
import { ToastContainer, toast } from "react-toastify";
import { postLogin } from "../../apirequest.jsx";
import "./admin.css";

const Adminlogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const tokenKey = localStorage.getItem("token");
    const onButtonPress = (e) => {
        e.preventDefault();
        const response = postLogin("api/login", { email, password });
        response.then((res) => {
            if (res.status == 200) {
                localStorage.setItem("token", res.data);
                window.location.reload(false);
            } else {
                toast.error(`${res.response.data}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };
    return (
        <div>
            {tokenKey !== null ? (
                <AdminPanel />
            ) : (
                <div className="Auth-form-container">
                    <ToastContainer />
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <img src={logo} className="logo-login" />
                            <h1
                                style={{
                                    marginBottom: "1rem",
                                    color: "purple",
                                }}
                            >
                                Login
                            </h1>
                            <div className="form-group mt-3 negative-margin">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={onButtonPress}
                                >
                                    Submit
                                </button>
                            </div>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};
export default Adminlogin;
