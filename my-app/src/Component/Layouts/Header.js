import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return(
        <>
         <nav className="navbar navbar-expand-md  fixed-top">
        <div className="container-fluid">
            <Link to="" className="navbar-brand">
                <img src="https://blogexpress.onrender.com/assets/images/logo123.png" alt="" className=" img-fluid weblogo"/>
            </Link>
            <button className="navbar-toggler" data-bs-target="#a" data-bs-toggler="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse " id="a">
                <ul className="  navbar-nav ms-auto text-center ">
                    <li><Link className="nav-link" to="/">HOME</Link></li>
                    <li><Link className="nav-link" to="about">ABOUT</Link></li>
                    <li><Link className="nav-link" to="blog">BLOG</Link></li>
                    <li><Link className="nav-link" to="contact">CONTACT</Link></li>
                    <li><Link className="nav-link" to="login">CREATE YOUR BLOG</Link></li>

                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}

export default Header;