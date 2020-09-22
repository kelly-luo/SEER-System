import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import './CustomSearchCard.css';

function CustomSearchCard(seField, operator){

  const [seMethods, setMethods] = useState([]);

  useEffect(() => {
      console.log("AXIOS")
      axios.get('/')
          .then(response => {
              setMethods(response.data)
          })

  }, [])

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     seMethods: []
  //   }
  // }

  // const componentDidMount() {

  //   const url = '/';

  //   axios.get(url)
  //       .then((response) => {
  //           console.log("AXIOS")
  //           this.setState({
  //               seMethods: response.data
  //           })
  //           // console.log(this.state.seMethods.map)
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       });
  // };


  const displaySeMethods = (method) => {

    return (
    <div className="box">
      <Form>
        <Row>
          <Col>If</Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">{seField}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{method.name}</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">{operator}</Dropdown.Toggle>
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
    );
  // return this.state.seMethods.map((res, i) => {
  //   return <SearchResultsData obj={res} key={i} />;
  // });

  // return this.state.seMethods.map((res, i) => {
  //   return <li key={i}>Test</li>;
  // });

  // console.log(this.state.seMethods.map((methods) => methods))
  // return this.state.seMethods.map((methods) => <li>{methods}</li>);

  // const methods = this.state.seMethods.map((m) =>
  //   console.log(m)
  // );
  // return (
  //   <ul>{methods}</ul>
  // );
}

  return (
    <div>{seMethods.map(displaySeMethods)}</div>
  );
  
}

export default CustomSearchCard;

