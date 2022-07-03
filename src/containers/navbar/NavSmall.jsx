import React from "react";
import "./navsmall.css";

const NavSmall = () => {
    return (
        <div className="container-class">
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn">
                <i class="fas fa-bars"></i>
            </label>
            <div class="wrapper">
                <ul>
                    <li style={{ marginBottom: "2rem" }}>
                        <a href="#">Home</a>
                    </li>

                    <li style={{ marginBottom: "2rem" }}>
                        <a href="#">About</a>
                    </li>

                    <li style={{ marginBottom: "2rem" }}>
                        <a href="#">Works</a>
                    </li>

                    <li style={{ marginBottom: "2rem" }}>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default NavSmall;
