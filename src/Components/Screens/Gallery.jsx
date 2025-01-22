import React from "react";
import Gallerycard from "../../Components/gallerycard";

// Import images
import BannerImage from "../../Assets/2k23pic/banner.jpg";
import PaperPresentationImage from "../../Assets/2k23pic/paper presentation.jpg";
import JumbledCodeImage from "../../Assets/2k23pic/Jumbled Code.jpg";
import UIDesignContestImage from "../../Assets/2k23pic/UI design Contest.jpg";
import BlockchainWorkshopImage from "../../Assets/2k23pic/blockchain.jpg";
import StartupWorkshopImage from "../../Assets/2k23pic/startup.jpg";

function Gallery() {
    return (
        <div className="images">
            <Gallerycard
                image={BannerImage}
                name="CRYPTERA 2K23"
            />

            <Gallerycard
                image={PaperPresentationImage}
                name="Paper Presentation"
            />

            <Gallerycard
                image={JumbledCodeImage}
                name="Jumbled Code"
            />

            <Gallerycard
                image={UIDesignContestImage}
                name="UI Design Contest"
            />

            <Gallerycard
                image={BlockchainWorkshopImage}
                name="Workshop on Blockchain"
            />

            <Gallerycard
                image={StartupWorkshopImage}
                name="Workshop on Startup"
            />
        </div>
    );
}

export default Gallery;
