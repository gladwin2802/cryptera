import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/ComponentsStyles/Navbar.css";
import logo from "../Assets/logo_final.png";
import { useState } from "react";
function Navbar() {
    const location = useLocation();
    const homeref = useRef(null);
    const aboutref = useRef(null);
    const contactref = useRef(null);
    const eventref = useRef(null);
    const commiteeref = useRef(null);
    const timelineref = useRef(null);
    const webref = useRef(null);
    const socialLinksRef = useRef(null);
    // const galleryref=useRef(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });


    const clearActive = () => {
        homeref.current.classList.remove("active");
        aboutref.current.classList.remove("active");
        contactref.current.classList.remove("active");
        eventref.current.classList.remove("active");
        webref.current.classList.remove("active");
        commiteeref.current.classList.remove("active");
        timelineref.current.classList.remove("active");
        // galleryref.current.classList.remove("active");
    };

    useEffect(() => {
        if (location.pathname === "/") {
            clearActive();
            homeref.current.classList.add("active");
        } else if (location.pathname.includes("/events")) {
            clearActive();
            eventref.current.classList.add("active");
        } else if (location.pathname === "/about_us") {
            clearActive();
            aboutref.current.classList.add("active");
        } else if (location.pathname === "/contact_us") {
            clearActive();
            contactref.current.classList.add("active");
        } else if (location.pathname === "/timeline") {
            clearActive();
            timelineref.current.classList.add("active");
        } else if (location.pathname === "/web_devs") {
            clearActive();
            webref.current.classList.add("active");
        } else if (location.pathname === "/committee") {
            clearActive();
            commiteeref.current.classList.add("active");
        }
        // else if (location.pathname === "/gallery"){
        //     clearActive();
        //     galleryref.current.classList.add("active");
        // }
        else {
            clearActive();
        }
    }, [location]);

    useEffect(() => {
        const eventDate = new Date("2025-02-21T09:00:00");
        const timer = setInterval(() => {
            const now = new Date();
            const timeDifference = eventDate - now;

            if (timeDifference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const gradientStyle = {
        background: `linear-gradient(to right, #05FFA3, #06BED8)`,
        WebkitBackgroundClip: "text",
        color: "transparent",
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <Link to="/" ref={homeref} className="active navbar-link" id="Home-link">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" ref={homeref} className="active navbar-link" id="Home-link">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="about_us" ref={aboutref} className="navbar-link" id="about_us-link">
                        <i className="fa fa-info-circle"></i>
                        <span>About us</span>
                    </Link>
                    <Link to="events" ref={eventref} className="navbar-link">
                        <i className="fa fa-calendar-minus"></i>
                        <span>Events</span>
                    </Link>
                    <Link to="timeline" ref={timelineref} className="navbar-link">
                        <i className="fa fa-calendar-check"></i>
                        <span>Timeline</span>
                    </Link>
                    <Link to="web_devs" ref={webref} className="navbar-link">
                        <i className="fa fa-wifi"></i>
                        <span>Web devs</span>
                    </Link>
                    <Link to="committee" ref={commiteeref} className="navbar-link">
                        <i className="fa fa-users"></i>
                        <span>Committee</span>
                    </Link>
                    <Link to="contact_us" ref={contactref} className="navbar-link">
                        <i className="fa fa-headset"></i>
                        <span>Contact Us</span>
                    </Link>

                </div>

                {/* Social Media Links */}
                <div className="social-links" ref={socialLinksRef}>
                    <a href="https://www.instagram.com/cryptera_2k25" style={{ padding: "10px" }}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCsiIbEbaefrwPFmJ_cxwoJg" style={{ padding: "10px" }}>
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="mailto:cryptera.cit@gmail.com" style={{ padding: "10px" }}>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
                {/* <div>
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json"
                    ></lottie-player>
                </div> */}
                <div className="countdown">
                    <p className="tagName">Commencing in</p>
                    <p style={gradientStyle}>
                        {timeLeft.days} Days {timeLeft.hours} Hrs {timeLeft.minutes} Mins {timeLeft.seconds} Secs
                    </p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
