import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../Components/pages/SearchResults";
import { changeSelect } from "../Components/pages/CustomSearchCard";

import {createStore} from 'redux';
import allReducers from '../Components/reducers/index.js'
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


describe("Testing Custom Search", () => {
   it('renders welcome message', function() {
      const wrapper = shallow(<Provider store={store}><App /></Provider>); 
      const welcome = <h1 className='App-title'>Welcome to React</h1>;
      expect(wrapper.contains(welcome)).to.equal(true);
    });
    
    it('should decrement the counter in state', () => {
      const state = { counter: 0 };
      const newState = doDecrement(state);
   
      expect(newState.counter).to.equal(-1);
    });
});

// import React from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";
// import { expect } from "chai";
// var jsdom = require("mocha-jsdom");

// global.document = jsdom({
//   url: "http://localhost:3000/"
// });

// import App from "../Components/App";

// let rootContainer;

// beforeEach(() => {
//   rootContainer = document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });

// describe("App Component Testing", () => {
//   it("Renders Hello World Title", () => {
//     act(() => {
//       ReactDOM.render(<App />, rootContainer);
//     });
//     const h1 = rootContainer.querySelector("h1");
//     expect(h1.textContent).to.equal("Hello World");
//   });
// });