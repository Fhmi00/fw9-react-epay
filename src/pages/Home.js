import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import NavBar from '../assets/components/NavBar'
import SideBar from '../assets/components/SideBar'

function Home() {
    return (
        <>        
        <div>
            <NavBar></NavBar>
        </div>
        <Container>
            <SideBar></SideBar>
            
        </Container>
        </>
        
    )
}

export default Home
