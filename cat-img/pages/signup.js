import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Container, Form, Card, Alert, error} from 'react-bootstrap'

//import {vercel} from '../public/vercel.svg'

export default function signup (){
    return (
        <div>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                                <Image src="/avatar.svg" width={200} height={77} className="ava" alt=""/>
                                <Form>
                                    
                                    <Form.Group controlid='forBasicEmail'>
                                       
                                        <Form.Control type ="email" placeholder="enter email address"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlid="forBasicPassword">
                                       
                                        <Form.Control type="password" placeholder="Password"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" className="w-100 h-60" type="submit" href="dashboard">
                                        Sign Up
                                    </Button>
                                
                                </Form>
                        

                            </Col>
                            <Col lg={8} md={6} sm={12}>
                                <img src="/security.svg" className="w-100"/>
                            </Col>
                        </Row>

                        </Container>
            
        </div>
    )
}
 