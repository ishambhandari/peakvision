import React, { useState } from "react";
import { postRegister } from "../../apirequest.jsx";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import backhome from "../../assets/backhome.png";
import logo from "../../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";

const Adminsignup = () => {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("Error");
    const [messageSuccess, setMessageSuccess] = React.useState("s");
    const [buttonpressed, setButtonpressed] = React.useState(false);
    React.useEffect(() => {
        if (message !== "Error") {
            toast.error(`${message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (messageSuccess !== "s") {
            toast.success(`Success`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [message, buttonpressed, messageSuccess]);

    const onSubmitButton = (e) => {
        e.preventDefault();
        setMessage("Error");
        setMessageSuccess("s");
        setButtonpressed(!buttonpressed);
        const res = postRegister("api/register", { fullName, email, password });
        console.log("resjll", res);
        res.then((r) => {
            if (r.status == 200) {
                setMessageSuccess("Success!");
                setFullName("");
                setEmail("");
                setPassword("");
            } else {
                setMessage(r.response.data);
            }
        });
    };

    return (
        <div>
            <Link to="/admin">
                <Button
                    variant="dark"
                    className="page-title border-gradient border-gradient-purple"
                >
                    <img
                        src={backhome}
                        style={{
                            height: "1rem",
                            width: "1rem",
                            marginRight: ".5rem",
                        }}
                    />
                    Home
                </Button>
            </Link>
            <div className="Auth-form-container">
                <ToastContainer />
                <form className="Auth-form">
                    <img src={logo} className="logo-peak" />
                    <h1
                        style={{
                            marginBottom: "1rem",
                            marginLeft: "3rem",
                            color: "purple",
                        }}
                    >
                        Admin Signup
                    </h1>

                    <div className="Auth-form-content">
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={onSubmitButton}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Adminsignup;
