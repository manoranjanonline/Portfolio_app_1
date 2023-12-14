import React from "react"
import '../cssfile/somu.css'
import bg from "../images/photo.jpg"
import Hireme from "../assets/hireme.png"
import {Link} from 'react-scroll'
const Somu =()=>{
   return( <>
   <section id="intero">
    <div className="introcontent">
      <span className="hello">Hello</span>
      <span className="introtext">I'm <span className="introname">Aman</span><br />Website Designer</span>
      <p className="intropara"></p>
      <Link><button className="btn"><img className="btnimg" src={Hireme} alt="" />Hire me!</button></Link>
    </div>
    <img className="bg" src={bg} alt="" />
   </section>
</>
 )
}
export default Somu;