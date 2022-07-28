import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from "react-icons/fi";

function SideBar() {
    return (
        <>
        <Row>
            <Col md={3} className="border white rounded-4 shadow my-5 py-4 px-5">
                <main className="d-flex flex-column gap-5">
                    <Row className="d-flex flex-column gap-5">
                    <Col  className="sidebar-text">
                        <FiGrid className="sidebar-icons"/>
                        <span>Dashboard</span>
                    </Col>
                    <Col  className="sidebar-text">
                        <FiArrowUp className="sidebar-icons"/>
                        <span>Transfer</span>
                    </Col>
                    <Col className="sidebar-text" >
                        <FiPlus className="sidebar-icons"/>
                        <span>Top Up</span>
                    </Col>
                    <Col  className="sidebar-text">
                        <FiUser className="sidebar-icons"/>
                        <span>Profile</span>
                    </Col>
                    </Row>
                    
                    <Col  className="sidebar-text-logout">
                        <FiLogOut className="sidebar-icons"/>
                        <span>Log Out</span>
                    </Col>
                </main>
            </Col>
        </Row>
        </>
    )
}

export default SideBar
