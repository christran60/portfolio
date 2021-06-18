import React from 'react'
// import pfp from "../images/bestpicofmecroppednobg.png"
import pfp from "../images/bestpicofmecropped.jpg"
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
                    <a className="cvlink" href="https://github.com/christran60/portfolio/tree/master/my-portfolio" target="_blank">CV here!</a>
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
