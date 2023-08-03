import React from "react";
import "../assets/Css/style.css";
import puvan from '../assets/image/puvan.jpg'

function IndexPage() {
    return (
        <div className="main-content">
            <div className="main-content-left">
                <h1><span>Hey</span> there</h1>
                <h1>this is <span className="gradient">Puvan</span> </h1>
                <h1><span>MERN Developer</span></h1>
                <p>I’ll provide a full service range including technical skills, design, business understanding.</p>
                <div >
                    <button className="main-btn"> Hire Me</button>
                    <button className="main-btn"> Resume</button>
                </div>
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



export default IndexPage;