import React from "react";
import "./About.css"


export default function About() {
  return (
    <div className="About_Main" id="about">
        <div className="About_Intro">
            <h1>Hi, I'm Chris.</h1>
        </div>
        <div className="About_Description">
            <p>
            I am a web developer based in Santa Clara, California.  I am a former purchasing manager, transitioning into a career in full stack software engineering.  Upon getting my B.S in Business, I stumbled upon a tutorial in creating a simple HTML page and have been hooked ever since that first "Hello World".
            </p>
            <p>
            Growing up, I always loved art and building things and I have found that Web development gives me the same satisfaction.  Web development for me is the same as art in the sense that the developer starts with a blank canvas and the resulting piece can be limitless.
            </p>
            <p>
            Feel free to have a look at my portfolio below, and don't hesitate to contact me if you'd like to chat.  Thanks for stopping by!
            </p>
        </div>
    </div>
  );
}
