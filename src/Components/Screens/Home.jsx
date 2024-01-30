import React, { useRef } from 'react';
import '../../Styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function Home() {
  const navigator = useNavigate();
  const Homeref = useRef(null);
  const greenref = useRef(null);
  const isMobile = window.innerWidth <= 768; 

  const clickhandler = (category) => {
    
    navigator(`/events?category=${encodeURIComponent(category)}`);
  };

  function getImagePath(index) {
    switch (index) {
      case 0:
        return isMobile ? 'pback.jpg' : 'back.jpg';
      case 1:
        return isMobile ? 'pback.jpg' : 'back.jpg';
      case 2:
        return isMobile ? 'pback.jpg' : 'back.jpg';
      default:
        return '';
    }
  }

  return (
    <div className='home main-section' id='Home' style={{ position: 'relative', padding:  isMobile ? '0px' : '', margin:isMobile?"0px 2px":"", overflow:isMobile?"hidden":"", position:isMobile?"fixed":"" }}>
      <div style={{ paddingTop: isMobile ? 'px' : '20px', paddingBottom: isMobile ? '5px' :'20px' }}>
        <Carousel
          style={{ height: '100vh' }}
          dynamicHeight={true}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img
                src={getImagePath(index)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: "900px" }}
                alt={`Image ${index + 1}`}
              />
              <div className="legend" style={{ maxWidth: "300px", position: 'absolute', textAlign: 'center', marginLeft: "auto", marginRight: "auto", left: 0, right: 0 ,background: 'linear-gradient(135deg, rgba(144, 238, 144, 0.5), rgba(128, 0, 128, 0.5))',
                opacity: 0.9, marginBottom: "70px", fontSize: "20px" }}>
                {index === 0 ? 
                  <button onClick={() => clickhandler('Technical')}>Technical</button> :
                  index === 1 ? 
                  <button onClick={() => clickhandler('Non-Technical')}>Non-Technical</button> :
                  <button onClick={() => clickhandler('Flagship')}>Flagship</button>
                }
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

