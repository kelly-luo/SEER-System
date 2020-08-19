import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';
import Axios from 'axios';

var expect  = require('chai').expect;
var request = require('request');

// test('Comment Maker', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/comments/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it('Backend Page', function(done) {
//     Axios.get('/')
//     request('http://localhost:4000' , function(error, response, body) {
//         expect(body).to.equal('Hello running on 4000. Testing heroku');
//         done();
//     });
// });

var assert = require('assert');
describe('Simple String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello World!".length, 12);
    });
});