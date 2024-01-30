import React, { useRef } from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const navigator = useNavigate();
  const Homeref = useRef(null);
  const greenref = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const clickhandler = (category) => {
    navigator(`/events?category=${encodeURIComponent(category)}`);
  };
  const handleClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSdVn_M4OESw7BRTY5QJF8FREnONDoWUfAreehNLWgyF81HhHw/viewform";
  };
  function getImagePath(index) {
    switch (index) {
      case 0:
        return isMobile ? "pback" : "back.jpg";
      case 1:
        return isMobile ? "pback.jpg" : "back.jpg";
      case 2:
        return isMobile ? "pback.jpg" : "back.jpg";
      case 3:
        return isMobile ? "pback.jpg" : "back.jpg";
      default:
        return "";
    }
  }

  return (
    <div
      className="home main-section"
      id="Home"
      style={{
        position: "relative",
        padding: isMobile ? "0px" : "",
        margin: isMobile ? "0px 2px" : "",
        overflow: isMobile ? "hidden" : "",
        position: isMobile ? "fixed" : "",
      }}
    >
      <div
        style={{
          paddingTop: isMobile ? "px" : "20px",
          paddingBottom: isMobile ? "5px" : "20px",
        }}
      >
        <Carousel
          style={{ height: "100vh" }}
          dynamicHeight={true}
          autoPlay={true}
          interval={2000}
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
                  marginBottom: "70px",
                  fontSize: "20px",
                  borderRadius: "50px",
                  background: "transparent",
                  opacity: 1,
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
                    <div>Technical</div>
                  </div>
                ) : index === 2 ? (
                  <div
                    onClick={() => clickhandler("Non-Technical")}
                    className="submit-btn-event"
                  >
                    <div>Non-Technical</div>
                  </div>
                ) : (
                  <div
                    onClick={() => clickhandler("Flagship")}
                    className="submit-btn-event"
                  >
                    <div>Flagship</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
