import React from "react";
import "./Projects.css";
import HCLanding from "../../Assets/hclanding.png";

export default function Projects() {
  return (
    <div className="Projects_Main" id="projects">
      <div className="Hidden_Camp_Container">
        <div className="Hidden_Camp_Img">
          <img src={HCLanding} alt="hidden_camp_img" className="HC_Img" />
        </div>
        <div className="Hidden_Camp_About">
          <div className="Hidden_Camp_About_Container">
            <h1>Hidden Camp</h1>
            <div className="Hidden_Camp_Explanation">
              <p>
                <strong className="strong">Description:</strong> This app allows
                private land owners to list their land as campsites. Users can
                book a listing directly through the app. This app allows users
                to search campsites based on city, categories, etc. Users/Hosts
                accounts are authenticated using Auth0.
              </p>
              <p>
                <strong className="strong">Awards:</strong> Won "Best Design"
                for best implementation of a high end design.
              </p>
              <p>
                <strong className="strong">Technologies Used:</strong> Built
                with HTML/CSS, React, Redux, NodeJS, Express and PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="Portfolio_HR"/>
    </div>
  );
}
