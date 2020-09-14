import React from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import SearchBar from '../SearchComponents/Searchbar'
import { Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

function Homepage() {
    return (
      <div className="homepage">
        <NavigationBar></NavigationBar>
        <div className="homepage_body">
          <img src="./SEER_logo.png" alt="" />
          <SearchBar></SearchBar>
          <div class="d-flex justify-content-center">
            <div class="p-3">
              <Button id="customButton" variant="secondary" size="sm">
                Custom Search
              </Button>{" "}
            </div>
          </div>
          <div className="customForm" class="d-flex justify-content-center">
            <Form>
              <Row>
                <Col>
                  If
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">Name of Field</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">Operator</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Form.Control placeholder="Value" />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
};


export default Homepage;