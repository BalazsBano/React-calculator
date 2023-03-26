import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './style.css';

export function Calculator() {
  return(
    <Container className='mt-5 py-3 col-md-6 offset-md-3 col-sm-12 calculator-container border border-primary rounded'>
      <Row className='calculator-display'>
        <Col className='px-4'>
          <Card className='border border-primary rounded'>
            <Card.Body>Numbers</Card.Body>
          </Card>
        </Col>
      </Row>
      <Container className='calculator-button-container'>
        <Row className='mt-2 d-flex'>
          <Col><Button className='col-12'>AC</Button></Col>
          <Col><Button className='col-12'>M+</Button></Col>
          <Col><Button className='col-12'>M-</Button></Col>
          <Col><Button className='col-12'>÷</Button></Col>
        </Row>
        <Row className='mt-2'>
          <Col><Button className='col-12'>7</Button></Col>
          <Col><Button className='col-12'>8</Button></Col>
          <Col><Button className='col-12'>9</Button></Col>
          <Col><Button className='col-12'>*</Button></Col>
        </Row>
        <Row className='mt-2'>
          <Col><Button className='col-12'>4</Button></Col>
          <Col><Button className='col-12'>5</Button></Col>
          <Col><Button className='col-12'>6</Button></Col>
          <Col><Button className='col-12'>-</Button></Col>
        </Row>
        <Row className='mt-2'>
          <Col><Button className='col-12'>1</Button></Col>
          <Col><Button className='col-12'>2</Button></Col>
          <Col><Button className='col-12'>3</Button></Col>
          <Col><Button className='col-12'>+</Button></Col>
        </Row>
        <Row className='mt-2'>
          <Col className='col-6'><Button className='col-12'>0</Button></Col>
          <Col><Button className='col-12'>.</Button></Col>
          <Col><Button className='col-12'>=</Button></Col>
        </Row>
      </Container>
    </Container>
  )
}