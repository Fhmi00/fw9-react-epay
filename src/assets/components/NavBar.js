import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import { FiBell } from "react-icons/fi";
import UserProfile from '../images/prof3.png'

function NavBar() {
    return (
        <>
        <Navbar className="rounded-4 shadow navbar py-4">
        <Container>
        <Navbar.Brand href="#home" className="navbar-brand">Zwallet</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <div className="d-flex align-items-center gap-3">
                <img src={UserProfile} alt=""></img>
                <div className="d-flex flex-column gap-1">
                    <span className="navbar-profile-name pt-3">Robert Chandler</span>
                    <p className="navbar-profile-phone-num">+62 8139 3877 7946</p>
                </div>
                <FiBell className="navbar-profile-bell"/>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default NavBar
