import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';
import axios from 'axios';



test('Comment Maker', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/comments/i);
    expect(linkElement).toBeInTheDocument();
});

var expectTest = require('chai').expect;
var request = require('request');

//it('Backend Page', function (done) {
  //  request("http://localhost:4000", function (error, response, body) {
    //    expectTest(body).to.equal('Hello running on 4000. Testing heroku');
     //   done();
    //});
//});

var assert = require('assert');
describe('Simple String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello World!".length, 12);
    });
});
