import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './CustomSearchCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { addArray } from '../actions/index.js'

function CustomSearchCard(props) {

  const leftCustomValue = useSelector(state => state.leftCustomValue)
  const dispatch = useDispatch();

  const [seMethods, setMethods] = useState([]);
  const [selectValue, setSelect] = useState('Select');
  const [operatorValue, setOperator] = useState('Operator');
  const [seValue, setSeValue] = useState('SE Method');
  // const [seId, setSeId] = useState([]);
  
  useEffect(() => {
  axios.get('/methods')
          .then(response => {
              console.log(response.data)
              setMethods(response.data)
          })
  }, [])
  
  const changeSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.textContent)
    props.changedSelectCallback(e.target.textContent);
    dispatch(addArray(e.target.textContent))
  }

  const changeOperator = (e) => {
    e.preventDefault();
    setOperator(e.target.textContent)
    props.changedOperatorCallback(e.target.textContent);
  }

  const changeSeMethod = (e) => {
    e.preventDefault();
    setSeValue(e.target.textContent)
    props.changedSeMethodCallback(e.target.textContent);
  }

  const displaySeMethods = (method, index) => {
      return (
          <div key={index}>
              <Dropdown.Item onClick={(e) => changeSeMethod(e)}>{method.name}</Dropdown.Item>
          </div>
      );
  }

  return (
    <div className="box">
      <Form>
        <Container>
          <Row>
            <Col md="auto">If</Col>
            <Col md="auto">
              <DropdownButton id="dropdown-basic-button" title={selectValue}>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>SE Method</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>SE Methodology</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>Benefit</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>Participants</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>Name of Field</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md="auto">
              <DropdownButton id="dropdown-basic-button" title={operatorValue}>
                <Dropdown.Item eventKey="1" onClick={(e) => changeOperator(e)}>contains</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={(e) => changeOperator(e)}>does not contain</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={(e) => changeOperator(e)}>begins with</Dropdown.Item>
                <Dropdown.Item eventKey="4" onClick={(e) => changeOperator(e)}>is equal</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md="auto">
              <DropdownButton id="dropdown-basic-button" title={seValue}>
                {seMethods.map(displaySeMethods)}
              </DropdownButton>
              {/* <Form.Control placeholder="Value" /> */}
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );

};

export default CustomSearchCard;