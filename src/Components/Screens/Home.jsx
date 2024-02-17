import { React, useState } from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assets/Caroussel/images/crypterabg.png"
import img2 from "../../Assets/Caroussel/images/technical.png"
import img3 from "../../Assets/Caroussel/images/non-technical.png"
import img4 from "../../Assets/Caroussel/images/flagship.png";
import img5 from "../../Assets/Caroussel/images/pcrypterabg.png";
import img6 from "../../Assets/Caroussel/images/ptechnical.png";
import img7 from "../../Assets/Caroussel/images/pnon-technical.png";
import img8 from "../../Assets/Caroussel/images/pflagship.png";
import bg from "../../Assets/Caroussel/images/space5.jpg"



function Home() {
    const navigator = useNavigate();

    const [unAcceptClick, setUnAcceptClick] = useState(null);


    const isMobile = window.innerWidth <= 768;

    const clickhandler = (category) => {
        navigator(`/events?category=${encodeURIComponent(category)}`);
    };
    const handleClick = () => {
        window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform";
    };



    const showSlider = (type) => {
        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");
        const caroussel1 = document.querySelector(".caroussel-1");
        const listHTML = document.querySelector(".caroussel-1 .list");

        nextButton.style.pointerEvents = "none";
        prevButton.style.pointerEvents = "none";

        caroussel1.classList.remove("prev", "next");
        let items = document.querySelectorAll(".caroussel-1 .list .item");

        if (type === "next") {
            listHTML.append(items[0]);
            caroussel1.classList.add("next");
        } else {
            let positionLast = items.length - 1;
            listHTML.prepend(items[positionLast]);
            caroussel1.classList.add("prev");
        }

        clearTimeout(unAcceptClick);
        setUnAcceptClick(setTimeout(() => {
            nextButton.style.pointerEvents = "auto";
            prevButton.style.pointerEvents = "auto";
        }, 2000));
    }


    return (
        <div
            className="home main-section"
            id="Home"
            style={{
                padding: isMobile ? "0px" : "",
                margin: isMobile ? "0px 2px" : "",
                overflow: isMobile ? "hidden" : "",
                position: isMobile ? "fixed" : "relative",
            }}
        >
            <div
                style={{
                    paddingTop: isMobile ? "px" : "0px",
                    paddingBottom: isMobile ? "5px" : "0px",
                }}
            >

                <section className="caroussel-1">
                    <img src={bg} alt="" />
                    <div className="list">
                        <div className="item">
                            <div className="item">
                                {/* <div onClick={() => clickhandler("Technical")} className="submit-btn-event" style={{ backgroundImage: `url(${isMobile ? img5 : img1})` }}>
                                        <div>Explore</div>
                                    </div> */}
                                <img src={isMobile ? img5 : img1} alt="" />
                                <div onClick={() => clickhandler("Technical")} className="submit-btn-event">
                                    <div>Explore</div>
                                </div>
                            </div>
                            {/*<div className="content">
                                    <div className="tag" style={{backgroundColor: '#C18EF1'}}>EVENT</div>
                                    <h2>Tea and Technology<span> Visual Studio Miniseries</span></h2>
                                    <p className="des">Now streaming on YouTube: Unlock new coding insights with our 7-episode miniseries featuring Visual Studio product managers.</p>
                                    <a href="">Watch on YouTube</a>
                                </div>*/}
                        </div>
                        <div className="item">
                            <img src={isMobile ? img6 : img2} alt="" />
                            {/*<div className="content">
                                <div className="tag" style={{backgroundColor: '#4DA64D'}}>FEATURE</div>
                                <h2> GitHub Copilot and Visual Studio 2022</h2>
                                <p className="des">Stay in your flow and complete tasks faster with the help of multi-line suggestions prompted by your code and code comments. Building new functionality, writing unit tests, and learning new technologies has never been easier or more fun.</p>
                                <a href="">Get GitHub Copilot</a>
            </div>*/}
                        </div>
                        <div className="item">
                            <img src={isMobile ? img7 : img3} alt="" />
                            {/*<div className="content">
                                <div className="tag" style={{backgroundColor: '#28AFEA'}}>GENERAL AVAILABILITY</div>
                                <h2>New features come to Microsoft Dev Box</h2>
                                <p className="des">Microsoft Dev Box provides developers with self-service access to high-performance, cloud-based workstations preconfigured for your projects.</p>
                                <a href="">Learn More</a>
        </div>*/}
                        </div>
                        <div className="item">
                            <img src={isMobile ? img8 : img4} alt="" />
                            {/*<div className="content">
                                <div className="tag" style={{backgroundColor: '#28AFEA'}}>GENERAL AVAILABILITY</div>
                                <h2>New features come to Microsoft Dev Box</h2>
                                <p className="des">Microsoft Dev Box provides developers with self-service access to high-performance, cloud-based workstations preconfigured for your projects.</p>
                                <a href="">Learn More</a>
        </div>*/}
                        </div>

                    </div>
                    <div className="arrows">
                        <button id="prev" onClick={() => showSlider("prev")}>{"<"}</button>
                        <button id="next" onClick={() => showSlider("next")}>{">"}</button>
                    </div>
                </section>
                {/* <section style="height: 500px;"></section> */}
                {/*           <Carousel
                    style={{ height: "100vh" }}
                    dynamicHeight={true}
                    autoPlay={true}
                    interval={2000}
                    stopOnHover={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                >
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            style={{
                                position: "relative",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={getImagePath(index)}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    maxHeight: "900px",
                                }}
                                alt={`Image ${index + 1}`}
                            />
                            <div
                                className="legend"
                                style={{
                                    maxWidth: "300px",
                                    position: "absolute",
                                    textAlign: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    left: 0,
                                    right: 0,
                                    fontSize: "20px",
                                    borderRadius: "50px",
                                    background: "transparent",
                                    opacity: 1,
                                    marginBottom: "0px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {index === 0 ? (
                                    <div
                                        onClick={() => handleClick()}
                                        className="submit-btn-event"
                                    >
                                        <div>Register Now</div>
                                    </div>
                                ) : index === 1 ? (
                                    <div
                                        onClick={() => clickhandler("Technical")}
                                        className="submit-btn-event"
                                    >
                                        <div>Explore</div>
                                    </div>
                                ) : index === 2 ? (
                                    <div
                                        onClick={() => clickhandler("Non-Technical")}
                                        className="submit-btn-event"
                                    >
                                        <div>Explore</div>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => clickhandler("Flagship")}
                                        className="submit-btn-event"
                                    >
                                        <div>Explore</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Carousel> */}
            </div>
        </div>
    );
}

export default Home;
