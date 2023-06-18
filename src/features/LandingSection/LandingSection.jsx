import React from 'react'
import image from "../../images/bakery.jpg"
import "./LandingSection.scss"

const LandingSection = () => {
    return (
        <div className="landingSection">
            <img src={image} alt="" className="home_image" />
            <div className="overlay" ></div>
            <div className="landingText">
                <div className="text">
                    <h1>
                        Scrumptious
                    </h1>
                    <p>
                        The warmest breads...<br />With the warmest regards!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default LandingSection