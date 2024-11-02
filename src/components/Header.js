import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";
import {Link} from "react-router-dom";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return <div className="header">
        <div>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li> <Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </div>
}//Header

export default Header;