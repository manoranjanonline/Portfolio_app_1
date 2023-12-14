import React from "react";
import '../cssfile/client.css'
import Walmart from "../assets/walmart.png"
import Adobe from "../assets/adobe.png"
import Microsoft from "../assets/microsoft.png"
import Facebook from "../assets/facebook.png"
import facebookicon from '../assets/facebook-icon.png'
import youtubeicon from '../assets/youtube.png'
import twittericon from '../assets/twitter.png'
import instagramicon from '../assets/instagram.png'
const Client = ()=>{
    return(
        <>
          <section className="contactpage">
            <div className="clients" id="client1">
              <h2 className="contractpagetitle">My Clients</h2>
              <p className="clientsdescription"></p>
            </div>
            <div className="clientimgs">
                <img src={Walmart} alt="" className="clientimg" />
                <img src={Adobe} alt="" className="clientimg" />
                <img src={Microsoft} alt="" className="clientimg" />
                <img src={Facebook} alt="" className="clientimg" />
            </div>
            <div className="contract" id="contract">
                <h1 className="contractpagetitle">Contract me</h1>
                <span className="contactdesc">i am a </span>
                <form action="" className="contractform">
                  <input type="text" className="name" placeholder="your name" />
                  <input type="email" name="" id="" className="email" placeholder="your email"/>
                  <textarea className="msg" name="massage" rows="5" placeholder="your massage"></textarea>
                  <button type="submit" value="send" className="submitbtn">submit</button>
                  <div className="links">
                    <img src={facebookicon} alt="" className="link" />
                    <img src={youtubeicon} alt="" className="link" />
                    <img src={instagramicon} alt="" className="link" />
                    <img src={twittericon} alt="" className="link" />
                  </div>
                </form>
            </div>
          </section>
        </>
    )
}
export default Client