import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import './CustomSearchCard.css'

function CustomSearchCard() {

    const [seMethods, setMethods] = useState([]);
    // const [nameOfField, setNameOfField] = useState(false);
    // const [seSelected,setSeSelectedValue]=useState('');

    useEffect(() => {
        axios.get('/methods')
            .then(response => {
                console.log(response.data)
                setMethods(response.data)
            })

    }, [])

    const selectedItem = (e) => {
        console.log("Selected: " + e);
        // setSeSelectedValue(e)
    }

    const displaySeMethods = (method) => {
        return (
            <div>
                <Dropdown.Item eventKey={'' + method.__v} onClick={selectedItem()}>{method.name}</Dropdown.Item>
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
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Method</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">SE Methods</Dropdown.Item>
                    <Dropdown.Item eventKey="2">SE Methodology</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Benefit</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Participants</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Name of Field</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md="auto">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Operator
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">contains</Dropdown.Item>
                    <Dropdown.Item eventKey="2">does not contain</Dropdown.Item>
                    <Dropdown.Item eventKey="3">begins with</Dropdown.Item>
                    <Dropdown.Item eventKey="3">is equal</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md="auto">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    SE Method
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {seMethods.map(displaySeMethods)}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Form.Control placeholder="Value" /> */}
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );

};

export default CustomSearchCard;