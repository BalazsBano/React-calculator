import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { DigitButton } from '../DigitButton';
import { OperationButton } from '../OperationButton';
import { memoryGetRequest, memoryPostRequest } from '../../api/memoryRequest';

export function Calculator() {
  const [prevValue, setPrevValue] = useState("");
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  }

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);
    let result = 0;
    switch (operation) {
      case "÷":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
      case "M+":
        result = curr;
        break;
      case "M-":
        result = curr;
        break;
    }
    return result;
  };

  const selectOperation = async (operation: string) => {
    if (currentValue) {
      const curr = parseFloat(currentValue);
      switch (operation) {
        case "M+":
          memoryPostRequest(curr)
          break;
        case "M-":
          const getRequest = await memoryGetRequest();
          const result = getRequest.data.value
          setCurrentValue(result)
          setPrevValue(result);
          break;
      }
    }
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  return(
    <div className='calculator pt-5'>
      <Container className={`calculator-container py-4 col-md-6 offset-md-3 col-sm-12 border border-primary rounded`}>
        <Row className='calculator-display-row'>
          <Col className='px-4'>
            <Card className='calculator-display border border-primary rounded'>
              <Card.Body className='d-flex justify-content-end'>{currentValue}</Card.Body>
            </Card>
          </Col>
        </Row>
        <Container className='calculator-button-container'>
          <Row className='mt-2 d-flex'>
            <Col><OperationButton className='ac-btn' operation={"AC"} selectOperation={clear}/></Col>
            <Col><OperationButton className='' operation={"M+"} selectOperation={selectOperation}/></Col>
            <Col><OperationButton className='' operation={"M-"} selectOperation={selectOperation}/></Col>
            <Col><OperationButton className='' operation={"÷"} selectOperation={selectOperation}/></Col>
          </Row>
          <Row className='mt-2'>
            <Col><DigitButton className='' digit={"7"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"8"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"9"} enterDigit={setDigit}/></Col>
            <Col><OperationButton className='' operation={"*"} selectOperation={selectOperation}/></Col>
          </Row>
          <Row className='mt-2'>
            <Col><DigitButton className='' digit={"4"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"5"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"6"} enterDigit={setDigit}/></Col>
            <Col><OperationButton className='' operation={"-"} selectOperation={selectOperation}/></Col>
          </Row>
          <Row className='mt-2'>
            <Col><DigitButton className='' digit={"1"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"2"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"3"} enterDigit={setDigit}/></Col>
            <Col><OperationButton className='' operation={"+"} selectOperation={selectOperation}/></Col>
          </Row>
          <Row className='mt-2'>
            <Col><DigitButton className='' digit={"0"} enterDigit={setDigit}/></Col>
            <Col><DigitButton className='' digit={"."} enterDigit={setDigit}/></Col>
            <Col><Button className='col-12' onClick={equals}>=</Button></Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}