import React from 'react'
import pfp from "../images/bestpicofmeremovedbg.png"
import "./Header.css"
function Header() {
    return (
        <div className="Headcontainer">
            <div className="nameandbiocontainer">
            <div className="introcont">
                Hi! I'm
            </div>
                <div className="namecont">
                Christopher Tran
                </div>
                {/* biocont is CV link */}
                <div className="biocont">
                Here's a link to my CV
                {/* still need to make this a clickable link */}
                </div>
            </div>
            
         <div className=" piccontainer  ">
                <div className="image">
                    <img className="actualpfp" src={pfp}/>
                </div>
            </div> 
        </div>
    )
}

export default Header
