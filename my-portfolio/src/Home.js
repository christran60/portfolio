import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import ContactMe from './components/ContactMe'
// import NavBar from './NavBar'
function Home() {
    return (
        <div>
            {/* <NavBar /> */}
            <Header />
        <Body />
        <Body2 />
        <Body3 />
        <ContactMe />
        </div>
    )
}

export default Home
