import React from "react";
import "../cssfile/about.css"
import UiDesign from "../assets/ui-design.png"
import webdesign from "../assets/website-design.png"
import appdesign from "../assets/app-design.png"
const About=()=>{
    return(
      <>
      <section className="skhills" id="About">
        <span className="skhilltitle">what I do</span>
        <span className="skhilldesc"></span>
        <div className="skhillbars">
            <div className="skhillbar">
                <img src={UiDesign} alt="" className="skhillbarimg" />
                <div className="skhillbartext">
                    <h2>UI/UX Design</h2>
                    <p>this ia a demo random text</p>
                </div>
            </div>
            <div className="skhillbar">
                <img src={webdesign} alt="" className="skhillbarimg" />
                <div className="skhillbartext">
                    <h2>Website Design</h2>
                    <p>this is a demo text here</p>
                </div>
            </div>
            <div className="skhillbar">
                <img src={appdesign} alt="" className="skhillbarimg" />
                <div className="skhillbartext">
                    <h2>App Design</h2>
                    <p>this is a random text here</p>
                </div>
            </div>
        </div>
      </section>
      </>
    )
}
export default About;