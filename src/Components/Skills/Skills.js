import React from "react";
import "./Skills.css"
import CSS from "../../Assets/css3.png";
import HTML from "../../Assets/html5.png";
import JS from "../../Assets/js.png";
import ReactLogo from "../../Assets/react.png";
import AngularLogo from "../../Assets/angularjs.png";
import NodeLogo from "../../Assets/node.png";
import PostgresLogo from "../../Assets/postgres.png";
import GitLogo from "../../Assets/git.png";


export default function Skills() {
  return (
    <div className="Skills_Main" id="skills">
        <div className="Skills_Header">
            <h1>Skills</h1>
            <hr/>
        </div>
        <div className="Skills_Container">
            <div className="Front">
                <h1>Front-End</h1>
                <div className="Technologies">
                <p>HTML5</p>
                <p>JavaScript(ES6)</p>
                <p>ReactJS</p>
                <p>Redux</p>
                <p>AngularJS</p>
                </div>
            </div>
            <div className="UI_UX">
                <h1>UI/UX</h1>
                <div className="Technologies">
                <p>CSS3</p>
                <p>Material UI</p>
                <p>BootStrap</p>
                </div>
            </div>
            <div className="Back">
                <h1>Back-End</h1>
                <div className="Technologies">
                <p>Node.js</p>
                <p>Express</p>
                <p>PostgreSQL</p>
                </div>
            </div>
        </div>
        <div className="Tech_Icon_Container">
            <div className="Tech_Icons">
                <img src={CSS} alt="csslogo" className="Tech_Logo"/>
                <img src={HTML} alt="htmllogo" className="Tech_Logo"/>
                <img src={JS} alt="jslogo" className="Tech_Logo"/>
                <img src={ReactLogo} alt="reactlogo" className="Tech_Logo"/>
                <img src={AngularLogo} alt="angularlogo" className="Tech_Logo"/>
                <img src={NodeLogo} alt="nodelogo" className="Tech_Logo"/>
                <img src={PostgresLogo} alt="postgreslogo" className="Tech_Logo"/>
                <img src={GitLogo} alt="gitlogo" className="Tech_Logo"/>
            </div>
        </div>
    </div>
  );
}
