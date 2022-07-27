import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import '../assets/css/style.css'
import Doublephone from '../assets/images/doublephone.png'
import { FiMail, FiLock, FiUser } from "react-icons/fi";

function SignUp() {
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
                    <span className="login-top-text">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</span>
                    <p className="login-second-text">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <InputGroup className="mb-5 login-input-group">
                        <InputGroup.Text id="basic-addon1" className="login-logo"><FiUser/></InputGroup.Text>
                            <Form.Control className='login-input'
                                placeholder="Enter your username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    <InputGroup className="mb-5 login-input-group">
                        <InputGroup.Text id="basic-addon1" className="login-logo"><FiMail/></InputGroup.Text>
                            <Form.Control className='login-input'
                                placeholder="Enter your e-mail"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    <InputGroup className="mb-5 login-input-group">
                        <InputGroup.Text id="basic-addon1" className="login-logo"><FiLock/></InputGroup.Text>
                            <Form.Control className='login-input'
                                placeholder="Create your password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    <div className="d-grid">
                        <Button className="login-btn">Sign Up</Button>{' '}
                    </div>
                    <div className="login-last-text">
                        <p>Already have an account? Let's Login</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SignUp
