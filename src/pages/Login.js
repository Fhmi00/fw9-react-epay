import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../assets/css/style.css'
import Doublephone from '../assets/images/doublephone.png'

function Login() {
    return (
        <>
        <Container>
            <Row className='ll'>
                <Col  className='login-side-left'>
                    <div>
                        <span>Zwallet</span>
                    </div>
                    <div>
                        <div>
                            <img src={Doublephone} alt=""></img>
                        </div>
                        <div>
                            <p>App that Covering Banking Needs.</p>
                            <p>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <span>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</span>
                    <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Login
