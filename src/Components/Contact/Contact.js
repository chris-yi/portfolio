import React from "react";
import "./Contact.css"
import Logo from "../../Assets/chrisyilogo.png"
import Resume from "../../Assets/ChrisYiResume2017.pdf"
import ResumeUpdate from "../../Assets/ChrisYiResume2017Update.pdf";



export default function Contact() {
  return (
    <div className="Contact_Main" id="contact">
        <div className="Contact_Container">
            <h1>Want to work together?</h1>
            <p>I am currently available for full-time work and would love to chat.</p>
            <p>Please shoot me an email.</p>
            <a href="mailto:chris.s.yi@outlook.com">
            <div className="Contact_Button">
                Message Me
            </div>
            </a>
        </div>
        <div className="Footer">
            <img src={Logo} alt="chrisyilogo" className="Footer_Logo"/>
            <p>&copy; 2017 Chris Yi</p>
            <div className="Contact_Badges">
                <a href={ResumeUpdate} target="_blank" rel="noopener noreferrer" download="chrisyi_resume">
                <div className="Contact_Badge"><i class="fa fa-file-o" aria-hidden="true"></i></div></a>
                <a href="https://www.linkedin.com/in/chrissyi/" target="_blank" rel="noopener noreferrer">
                <div className="Contact_Badge"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a>
                <a href="https://github.com/chris-yi" target="_blank" rel="noopener noreferrer">
                <div className="Contact_Badge"><i class="fa fa-github" aria-hidden="true"></i></div></a>
                <a href="https://www.instagram.com/js_almighty/" target="_blank" rel="noopener noreferrer">
                <div className="Contact_Badge"><i class="fa fa-instagram" aria-hidden="true"></i></div></a>
                <a href="mailto:chris.s.yi@outlook.com" target="_blank" rel="noopener noreferrer">
                <div className="Contact_Badge"><i class="fa fa-envelope-o" aria-hidden="true"></i></div></a>
            </div>
        </div>
    </div>
  );
}
