import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import './CustomSearchCard.css';

function CustomSearchCard() {

    const [seMethods, setMethods] = useState([]);

    useEffect(() => {
        axios.get('/methods')
            .then(response => {
                console.log(response.data)
                setMethods(response.data)
            })

    }, [])

    const displaySeMethods = (method) => {
        return (
            <div>
                <Dropdown.Item href="#/action-1">{method.name}</Dropdown.Item>
            </div>

        );
    }

    return (
        <div className="box">
            <Form>
                <Row>
                    <Col>If</Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">xD</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {seMethods.map(displaySeMethods)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">Dx</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {seMethods.map(displaySeMethods)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Value" />
                    </Col>
                </Row>
            </Form>
        </div>
    );

};

export default CustomSearchCard;