import React from 'react'
import {Link } from "react-router-dom"
import "./ContactMe.css"
function ContactMe() {
    return (
        <div className="ContactMeCont">
            <div className="supercont">
                <div className="titlecont">
                    Get Connected With Me! 
                </div>
                    <Link to ="/ContactPage"
                        className="contactlink"
                        >
                        Contact Me
                    </Link>
            </div>
        </div>
    )
}

export default ContactMe
