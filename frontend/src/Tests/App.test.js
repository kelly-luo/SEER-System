import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import App from "../Components/App.js";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Hello World Title", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World");
  });
});

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from '../Components/App';
// import axios from 'axios';



// /*test('Comment Maker', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/comments/i);
//     expect(linkElement).toBeInTheDocument();
// });*/

// var expectTest = require('chai').expect;
// var request = require('request');

// //it('Backend Page', function (done) {
//   //  request("http://localhost:4000", function (error, response, body) {
//     //    expectTest(body).to.equal('Hello running on 4000. Testing heroku');
//      //   done();
//     //});
// //});

// var assert = require('assert');
// describe('Simple String Test', function () {
//     it('should return number of charachters in a string', function () {
//         assert.equal("Hello World!".length, 12);
//     });
// });