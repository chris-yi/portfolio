import React from "react";
import Logo from "../../Assets/chrisyilogo.png"
import "./Home.css"


export default function Home() {
  return (
    <div className="Home_Main" id="home">
      <div className="Logo_Container">
          <img src={Logo} alt="chrisyi" className="Name_Logo"/>
          <hr/>
          <p className="Job_Title">Web Developer</p>
      </div>
    </div>
  );
}