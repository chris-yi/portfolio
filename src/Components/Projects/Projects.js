import React from "react";
import "./Projects.css";
import HCHQ from "../../Assets/hchq.png";
import LandingPage from "../../Assets/landingpage.png";

export default function Projects() {
  return (
    <div className="Projects_Main" id="projects">
      <div className="Portfolio_Container">
        <div className="Portfolio_Img">
          <img src={LandingPage} alt="hidden_camp_img" className="HC_Img" />
        </div>
        <div className="Portfolio_About">
          <div className="Portfolio_About_Container">
            <h1>Personal Landing Page</h1>
            <div className="Portfolio_Explanation">
              <p>
                <strong className="strong">Description:</strong> A personal
                landing page app using Weather, Inspirational Quote and Unsplash
                Images APIs. This app grabs the geolocation of the user and
                displays the current weather and time according to the users
                location. User has the capability of tweeting out the random
                quote generated on the page as well as a custom search bar that
                generates results from Google. A new background image is
                generated everytime the user revisits the page.
              </p>
              <p>
                <strong className="strong">Technologies Used:</strong> Built
                with HTML/CSS, JavaScript, React, NodeJS, and Express.
              </p>
            </div>
            <div className="Portfolio_Buttons">
              <a
                href="https://github.com/chris-yi/no-db-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Portfolio_Button">
                  Github <i class="fa fa-github" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="Portfolio_HR" />
      <div className="Portfolio_Container">
        <div className="Portfolio_Img">
          <img src={HCHQ} alt="hidden_camp_img" className="HC_Img" />
        </div>
        <div className="Portfolio_About">
          <div className="Portfolio_About_Container">
            <h1>Hidden Camp</h1>
            <div className="Portfolio_Explanation">
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
                with HTML/CSS, JavaScript, React, Redux, NodeJS, Express,
                Massive, PostgreSQL, and Auth0
              </p>
            </div>
            <div className="Portfolio_Buttons">
              <a
                href="http://hiddencamp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Portfolio_Button">Website</div>
              </a>
              <a
                href="https://github.com/chris-yi/hidden-camp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Portfolio_Button">
                  Github <i class="fa fa-github" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
