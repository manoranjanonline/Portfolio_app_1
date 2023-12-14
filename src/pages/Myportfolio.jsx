import React from "react";
import '../cssfile/myportfolio.css'
import Portfolio1 from '../assets/portfolio-1.png'
import Portfolio2 from '../assets/portfolio-2.png'
import Portfolio3 from '../assets/portfolio-3.png'
import Portfolio4 from '../assets/portfolio-4.png'
import Portfolio5 from '../assets/portfolio-5.png'
import Portfolio6 from '../assets/portfolio-6.png'
const Myportfolio = ()=>{
    return(
        <>
         <section id="works">
            <h2 className="worktitle">My Portfolio</h2>
            <span className="workdesc">i am a goo</span>
            <div className="workimg">
                <img src={Portfolio1} alt="" className="worksimg" />
                <img src={Portfolio2} alt="" className="worksimg" />
                <img src={Portfolio3} alt="" className="worksimg" />
                <img src={Portfolio4} alt="" className="worksimg" />
                <img src={Portfolio5} alt="" className="worksimg" />
                <img src={Portfolio6} alt="" className="worksimg" />
            </div>
            <button className="workbtn">see more</button>
         </section>
        </>
    )
}
export default Myportfolio;