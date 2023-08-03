import React from "react";
import "../assets/Css/style.css";
import puvan from '../assets/image/work.jpeg'

function Project() {
    return (
        <div className="main-content">
            <div className="main-content-left">
                <h1>Aruvi Institue of <span className="gradient">Learning</span> </h1>
                <p>I am a passionate web developer who recently embarked on my journey in the world of coding. With a strong foundation in HTML and CSS, I successfully created a full static website for Aruvi Institute of Learning, showcasing my dedication and determination in bringing my first project to life. I am excited to continue honing my skills and exploring new technologies in web development.</p>
                <a className="submit-btn" href="https://www.aruviinstituteoflearning.com/" target="_blank">View Live</a>
            </div>
            <div className="main-pic">
                <div className="box box-color1">

                </div>
                <div className="box box-color2">

                </div>
                <div className="image-contain">
                    <img src={puvan} />
                </div>
            </div>
        </div>)
}



export default Project;