import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./CustomSearchCard.css";
import { useDispatch } from "react-redux";
import { addLeft, addMiddle, addRight } from "../../actions/index";
import { useLocation, useHistory } from "react-router-dom";

function CustomSearchCard(props) {

  const dispatch = useDispatch();
  const location = useLocation()
  const history = useHistory();

  const [seMethods, setMethods] = useState([]);
  const [filterSeMethod, setFilterSeMethod] = useState([]);
  const [selectValue, setSelect] = useState("Select");
  const [operatorValue, setOperator] = useState("Operator");
  const [seValue, setSeValue] = useState("SE Method");
  

  useEffect(() => {
    axios.get("/methods").then((response) => {
      console.log(response.data);
      setMethods(response.data);
    });
  }, []);

  useEffect(() => {
      var currentLocation = '';
      var prevLocation = '';
      history.listen((location) => {

        if(currentLocation !== location.pathname){
          prevLocation = currentLocation.toString()
          currentLocation = location.pathname
        }

        console.log(
          `The current URL is ${currentLocation}}`
        );
        console.log(`The last navigation location was ${prevLocation}`);

        // if(prevLocation === ''){
        //   dispatch(addMiddle(operatorValue));
        // }
      });
  });

  const changeSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.textContent);
    console.log(e.target.textContent);
    dispatch(addLeft(e.target.textContent));

    if (e.currentTarget.textContent === "SE Method") {
      setFilterSeMethod(seMethods[0]);
    }
    if (e.currentTarget.textContent === "SE Methodology") {
      setFilterSeMethod(seMethods[1]);
    }
  };

  const changeOperator = (e) => {
    e.preventDefault();
    setOperator(e.target.textContent);
    console.log(e.target.textContent);
    dispatch(addMiddle(e.target.textContent));
  };

  const changeSeMethod = (e) => {
    e.preventDefault();

    if(selectValue === "SE Method" || selectValue === "SE Methodology"){
      // console.log(e.target.textContent);
      // TOO DOOOOO dropdown box for e.target.textContent
      setSeValue(e.target.textContent);
      dispatch(addRight(e.target.textContent));
    }else{
      // console.log(e.target.textContent);
      // TOO DOOOOO dropdown box for e.target.textContent
      setSeValue(e.target.value);
      dispatch(addRight(e.target.value));
    }
    console.log(seValue)
  };

  const displaySeMethods = (method, index) => {
    return (
      <div key={index}>
        <Dropdown.Item onClick={(e) => changeSeMethod(e)}>
          {method}
        </Dropdown.Item>
      </div>
    );
  };

  return (
    <div className="box">
        <Container>
          <Row>
            <Col md="auto">If</Col>
            <Col md="auto">
              <DropdownButton id="dropdown-basic-button" title={selectValue}>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>
                  SE Method
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>
                  SE Methodology
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>
                  Title
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeSelect(e)}>
                  Author
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md="auto">
              <DropdownButton id="dropdown-basic-button" title={operatorValue}>
                <Dropdown.Item eventKey="1" onClick={(e) => changeOperator(e)}>
                  contains
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={(e) => changeOperator(e)}>
                  does not contain
                </Dropdown.Item>
                {selectValue !== "SE Method" &&
                selectValue !== "SE Methodology" ? (
                  <>
                    <Dropdown.Item
                      eventKey="3"
                      onClick={(e) => changeOperator(e)}
                    >
                      begins with
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="4"
                      onClick={(e) => changeOperator(e)}
                    >
                      ends with
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="5"
                      onClick={(e) => changeOperator(e)}
                    >
                      is equal
                    </Dropdown.Item>
                  </>
                ) : null}
              </DropdownButton>
            </Col>
            <Col md="auto">
              {selectValue !== "Select" ? (
                selectValue === "Author" || selectValue === "Title" ? (
                  <Form>
                    <Form.Control
                      placeholder={`Enter ${selectValue}`}
                      onChange={(e) => changeSeMethod(e)}
                    />
                  </Form>
                ) : (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={seValue}
                  >
                    {filterSeMethod.seMethod.map(displaySeMethods)}
                  </DropdownButton>
                )
              ) : null}
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default CustomSearchCard;
