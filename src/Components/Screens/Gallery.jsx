import React, { useState } from "react";
import "../../Styles/Gallery.css";

// Import your images
import BannerImage from "../../Assets/2k23pic/banner.jpg";
import PaperPresentationImage from "../../Assets/2k23pic/paper presentation.jpg";
import JumbledCodeImage from "../../Assets/2k23pic/Jumbled Code.jpg";
import UIDesignContestImage from "../../Assets/2k23pic/UI design Contest.jpg";
import BlockchainWorkshopImage from "../../Assets/2k23pic/blockchain.jpg";
import StartupWorkshopImage from "../../Assets/2k23pic/startup.jpg";

// Slider data
const slidesData = [
    { image: BannerImage, title: "CRYPTERA 2K23" },
    { image: PaperPresentationImage, title: "Paper Presentation" },
    { image: JumbledCodeImage, title: "Jumbled Code" },
    { image: UIDesignContestImage, title: "UI Design Contest" },
    { image: BlockchainWorkshopImage, title: "Workshop on Blockchain" },
    { image: StartupWorkshopImage, title: "Workshop on Startup" },
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slidesData.length - 1 : prev - 1
        );
    };

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === slidesData.length - 1 ? 0 : prev + 1
        );
    };

    // Navigate to specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider-container">
            <div
                className="slider"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slidesData.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        <div className="slide-overlay">
                            <h2>{slide.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className="nav-button nav-left" onClick={prevSlide}>
                &#10094; {/* Left arrow */}
            </button>
            <button className="nav-button nav-right" onClick={nextSlide}>
                &#10095; {/* Right arrow */}
            </button>

            {/* Dots for slide navigation */}
            <div className="dots-container">
                {slidesData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
