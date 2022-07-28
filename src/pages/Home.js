import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import NavBar from '../assets/components/NavBar'
import SideBar from '../assets/components/SideBar'
import Footer from '../assets/components/Footer'

function Home() {
    return (
        <>        
        <div>
            <NavBar></NavBar>
        </div>
        <Container>
            <SideBar></SideBar>
            
        </Container>
        <div>
            <Footer></Footer>
        </div>
        </>
        
    )
}

export default Home
