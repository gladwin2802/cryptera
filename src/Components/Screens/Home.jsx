import { React, useState, useEffect } from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";

// Example image imports
import img1 from "../../Assets/Caroussel/images/crypterabg.jpg";
import img2 from "../../Assets/Caroussel/images/technical.jpg";
import img3 from "../../Assets/Caroussel/images/non-technical.jpg";
import img4 from "../../Assets/Caroussel/images/flagship.jpg";
import img5 from "../../Assets/Caroussel/images/pcrypterabg.jpg";
import img6 from "../../Assets/Caroussel/images/ptechnical.jpg";
import img7 from "../../Assets/Caroussel/images/pnon-technical.jpg";
import img8 from "../../Assets/Caroussel/images/pflagship.jpg";
import bg from "../../Assets/Caroussel/images/space5.jpg";
import CountDownHome from "./CountDownHome";
import Gallery from './Gallery';

function Home() {
    const navigator = useNavigate();
    const [unAcceptClick, setUnAcceptClick] = useState(null);
    const isMobile = window.innerWidth <= 768;
    const [autoClickInterval, setAutoClickInterval] = useState(null);

    // --- Helper functions to manage autoplay -----------------------------------
    const stopAutoplay = () => {
        if (autoClickInterval) {
            clearInterval(autoClickInterval);
            setAutoClickInterval(null);
        }
    };

    const startAutoplay = () => {
        // Stop any existing timer first:
        stopAutoplay();
        // Create a new 4-second interval
        const interval = setInterval(() => {
            const nextButton = document.getElementById("next");
            if (nextButton) {
                nextButton.click();
            }
        }, 3500);
        setAutoClickInterval(interval);
    };
    // ---------------------------------------------------------------------------

    useEffect(() => {
        startAutoplay(); // Begin autoplay on component mount
        return stopAutoplay; // Cleanup on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clickhandler = (category) => {
        navigator(`/events?category=${encodeURIComponent(category)}`);
    };

    const handleClick = () => {
        window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform";
    };
    const showSlider = (type) => {
        stopAutoplay(); // Stop any ongoing timer to avoid conflict

        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");
        const caroussel1 = document.querySelector(".caroussel-1");
        const listHTML = document.querySelector(".caroussel-1 .list");

        // Temporarily disable the buttons to prevent spam clicks
        nextButton.style.pointerEvents = "none";
        prevButton.style.pointerEvents = "none";

        caroussel1.classList.remove("prev", "next");
        const items = document.querySelectorAll(".caroussel-1 .list .item");

        if (type === "next") {
            listHTML.append(items[0]);
            caroussel1.classList.add("next");
        } else {
            const positionLast = items.length - 1;
            listHTML.prepend(items[positionLast]);
            caroussel1.classList.add("prev");
        }

        // Re-enable the buttons after a brief delay
        clearTimeout(unAcceptClick);
        setUnAcceptClick(
            setTimeout(() => {
                nextButton.style.pointerEvents = "auto";
                prevButton.style.pointerEvents = "auto";
            }, 100)
        );

        // Restart the autoplay timer
        startAutoplay();
    };

    return (
        <div style={{height:"100vh", width:"100%",overflowY:"scroll"}}>
            <div
                className="home main-section"
                id="Home"
                style={{
                    padding: isMobile ? "0px" : "",
                    margin: isMobile ? "0px 2px" : "",
                    overflow: isMobile ? "hidden" : "",
                    // position: isMobile ? "fixed" : "relative",
                    
                    position: "relative"
                }}
            >
                <div
                    style={{
                        paddingTop: isMobile ? "0px" : "0px",
                        paddingBottom: isMobile ? "5px" : "0px",
                        position: "absolute",
                        // top:100
                    }}
                >

                    <section className="caroussel-1">
                        <img className="bg" src={bg} alt="" />
                        <div className="list">
                            <div className="item">
                                <img src={isMobile ? img8 : img4} alt="" />
                                <div onClick={() => clickhandler("Flagship")} className="item-button">
                                    <div>Explore</div>
                                </div>
                            </div>
                            <div className="item">
                                <img src={isMobile ? img5 : img1} alt="" />
                                {/* Example button if needed:
              <div onClick={() => handleClick()} className="item-button">
                <div>Register Now</div>
              </div> */}
                            </div>
                            <div className="item">
                                <img src={isMobile ? img6 : img2} alt="" />
                                <div onClick={() => clickhandler("Technical")} className="item-button">
                                    <div>Explore</div>
                                </div>
                            </div>
                            <div className="item">
                                <img src={isMobile ? img7 : img3} alt="" />
                                <div onClick={() => clickhandler("Non-Technical")} className="item-button">
                                    <div>Explore</div>
                                </div>
                            </div>
                        </div>
                        <div className="arrows">
                            <button id="prev" onClick={() => showSlider("prev")}>
                                {"<"}
                            </button>
                            <button id="next" onClick={() => showSlider("next")}>
                                {">"}
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            
            
        </div>
    );
           
}

export default Home;
