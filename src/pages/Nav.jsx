import React, { useState }  from "react"
import '../cssfile/nav.css'
import Logo from "../assets/logo.png"
import Contractimg from "../assets/contact.png"
import {Link} from 'react-scroll'
import Menu from '../assets/menu.png'
const Nav = ()=>{
  const [showMenu ,setShowMenu] = useState(false)
  return (
  <>
  <nav className="navbar">
    <img className="logo"src={Logo} alt="Logo" />
    <div className="desktopmenu">
    <Link activeClass="active" to="intero" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitem">Home</Link>
    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500}  className="desktopmenuitem">About</Link>
    <Link activeClass="active" to="client1" spy={true} smooth={true} offset={-50} duration={500}  className="desktopmenuitem">Client</Link>
    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="desktopmenuitem">Portfolio</Link>
    </div>
    <button className="desktopmenubtn" onClick={()=>{
      document.getElementById('contract').scrollIntoView({behavior : 'smooth'});
    }}><img src={Contractimg} alt="" className="desktopmenuimg" />Contract us</button>


     <img className="mobmenu"src={Menu} alt="mbmenu" onClick={()=>setShowMenu(true)} />
    <div className="navmenu"style={{display : showMenu?'flex':'none'}}>
    <Link activeClass="active" to="intero" spy={true} smooth={true} offset={-100} duration={500} className="listitem"onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass="active" to="client1" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"onClick={()=>setShowMenu(false)}>Client</Link>
    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
    <Link activeClass="active" to="contract" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"onClick={()=>setShowMenu(false)}>Contract</Link>
    </div>
  </nav>
</>
)
}
export default Nav;
