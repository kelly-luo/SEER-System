import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import './CustomSearchCard.css';

class CustomSearchCard extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      seMethods: []
    }
  }

  componentDidMount() {
    console.log("AXIOS")
    const url = '/';

    axios.get(url)
        .then((response) => {
            this.setState({
                seMethods: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
  };


displaySeMethods() {
  const methods = this.state.seMethods.map((m) =>
    console.log(m)
  );
  return (
    <ul>{methods}</ul>
  );
}

  render() {
    return (
      <div className="box">
        {this.displaySeMethods}
        <Form>
          <Row>
            <Col>If</Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">{this.props.seField}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">{this.props.operator}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
  }
}

export default CustomSearchCard;

