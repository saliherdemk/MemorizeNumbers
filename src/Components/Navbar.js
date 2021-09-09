import React from "react";
import { Link } from "react-router-dom";
import logo from  '../icons/githubLogo.png'
const Navbar = () =>{

    return(
        <div className="nav">
            <Link to="/">
                <svg className="home" width="53" height="55" viewBox="0 0 123 125" fill="none">
                <path d="M103.853 63.5424L61.0245 22.4748L18.1747 63.5595V122.266C18.1747 123.784 19.3058 125 20.7052 125H47.4856V99.2584C47.4856 97.7431 48.6088 96.5184 50.0109 96.5184H72.0145C73.4165 96.5184 74.5397 97.7431 74.5397 99.2584V125H101.328C102.727 125 103.853 123.784 103.853 122.266V63.5424V63.5424Z" fill="#C0C0C0"/>
                <path d="M60.7773 0L0.00100708 58.2705L6.40296 66.0887L61.024 13.7167L115.634 66.0887L122.024 58.2705L61.2607 0L61.024 0.296211L60.7767 0H60.7773Z" fill="#C0C0C0"/>
                <path d="M18.1747 8.38783H33.5812L33.447 18.2681L18.1747 33.2067V8.38783Z" fill="#C0C0C0"/>
                </svg>
            </Link>
            
            <a href="https://github.com/saliherdemk/MemorizeNumbers" target="blank" >
                <img src={logo} alt="" />
            </a>
            
        </div>
    )
}

export default Navbar