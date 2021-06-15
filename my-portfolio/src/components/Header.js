import React from 'react'
import pfp from "../images/bestpicofmeremovedbg.png"
import "./Header.css"
function Header() {
    return (
        <div className="Headcontainer">
            <div className="nameandbiocontainer">
                <div className="namecont">
                Christopher Tran
                </div>
                <div className="biocont">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi.
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
