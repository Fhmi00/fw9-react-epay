import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import '../assets/css/style.css'
import Doublephone from '../assets/images/doublephone.png'
import { FiLock } from "react-icons/fi";

function ResetPasswordSuccess() {
    return (
        <>
        <Container>
            <Row className='ll'>
                <Col md={7} className='login-side-left'>
                    <div className="px-5 py-5">
                    <div className="login-brand">
                        <span>Zwallet</span>
                    </div>
                    <div>
                        <div>
                            <img fluid src={Doublephone} alt=""></img>
                        </div>
                        <div>
                            <p className="login-title">App that Covering Banking Needs.</p>
                            <p className="login-desc">Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col md={5} className="login-right-side d-flex flex-column">
                    <span className="login-top-text">Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</span>
                    <p className="login-second-text">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                    
                    <InputGroup className="mb-5 login-input-group">
                        <InputGroup.Text id="basic-addon1" className="login-logo"><FiLock/></InputGroup.Text>
                            <Form.Control className='login-input'
                                placeholder="Enter your password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    <InputGroup className="mb-5 login-input-group">
                        <InputGroup.Text id="basic-addon1" className="login-logo"><FiLock/></InputGroup.Text>
                            <Form.Control className='login-input'
                                placeholder="Enter your password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    
                    <div className="d-grid">
                        <Button className="login-btn">Confirm</Button>{' '}
                    </div>
                    
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ResetPasswordSuccess
