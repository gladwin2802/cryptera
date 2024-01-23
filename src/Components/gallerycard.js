import React from "react";
import "../Styles/ComponentsStyles/gallerycard.css"

function gallerycard(props){
    return(
        <div className="gallery-profile">
            <div className="gallery-conatainer">
                <div className="gallery-container-img" >
                    <img src={props.image} alt='event' />
                </div>
                <div className="gallery-container-name">
                    <div style={{fontSize:"16px"}}>
                        <h1>{props.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default gallerycard