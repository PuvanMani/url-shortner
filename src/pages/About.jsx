import React from "react";
import "../assets/Css/style.css";
import puvan from '../assets/image/puvan.jpg'

function About() {
    return (
        <div className="main-content">
            <div className="main-content-left">
                <h1>This is <span className="gradient">Puvan</span> </h1>
                <h1><span>MERN Developer</span></h1>
                <p>Welcome to my portfolio ! I am a passionate and versatile full-stack web developer with a keen eye for detail and a knack for crafting seamless user experiences. Armed with expertise in front-end technologies like HTML, CSS, and JavaScript, coupled with a strong backend foundation in Node.js and databases, I create elegant, efficient, and scalable solutions. Whether it's building dynamic web applications or bringing captivating designs to life, I thrive on turning ideas into reality. Let's collaborate and bring your digital vision to the forefront of the online world!</p>
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



export default About;