import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import '../assets/css/style.css'
import Doublephone from '../assets/images/doublephone.png'

function CreatePin() {
    return (
        <>
        <>
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
                    <span className="login-top-text">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</span>
                    <p className="login-second-text">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.</p>
                    <div className="mb-5">
                        <div className="d-flex gap-4">
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup>
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup>
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup>
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup>
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup>
                            <InputGroup className="mb-3 border createpin-input">
                                <Form.Control maxLength={1} className="createpin-input-inside"/>
                            </InputGroup> 
                        </div>
                    </div>
                    <div className="d-grid">
                        <Button className="login-btn">Confirm</Button>{' '}
                    </div>
                </Col>
            </Row>
        </>
        </>
    )
}

export default CreatePin
