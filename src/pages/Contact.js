import React from "react";
import "../assets/Css/style.css";
import puvan from '../assets/image/puvan.jpg'
import ContactForm from "../components/form";

function Contact() {
    return (
        <div className="main-content">
            <div className="main-content-left">
                <ContactForm />
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



export default Contact;