import React from "react";
import "./Contact.css"
import Logo from "../../Assets/chrisyilogo.png"


export default function Contact() {
  return (
    <div className="Contact_Main" id="contact">
        <div className="Contact_Container">
            <h1>Want to work together?</h1>
            <p>I am currently available for full-time work and would love to chat.</p>
            <p>Please shoot me an email.</p>
            <div className="Contact_Button">
                <a href="mailto:chris@chrisyi.me">Contact Me</a>
            </div>
        </div>
        <div className="Footer">
            <img src={Logo} alt="chrisyilogo" className="Footer_Logo"/>
            <p>&copy; 2017 Chris Yi</p>
            <div className="Contact_Badges">
                <div className="Contact_Badge"><i class="fa fa-file-o" aria-hidden="true"></i></div>
                <div className="Contact_Badge"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                <div className="Contact_Badge"><i class="fa fa-github" aria-hidden="true"></i></div>
            </div>
        </div>
    </div>
  );
}
