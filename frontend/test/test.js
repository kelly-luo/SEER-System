var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


// ./node_modules/.bin/mocha --require babel-register --require ignore-styles ./test/test.js
// to run the tests

import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import Homepage from "../src/Components/pages/Homepage.js";

let rootContainer;

beforeEach(() => {
  rootContainer = document.getElementById('customButton');
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Homepage Component Testing", () => {
  it("Custom Search Title", () => {
    act(() => {
      ReactDOM.render(<Homepage />, rootContainer);
    });
    const Button = rootContainer.querySelector("Button");
    expect(Button.textContent).to.equal("Custom Search");
  });
});