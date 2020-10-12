import { isIncluded } from '../Components/pages/UploadPage/UploadFile.js';

import { chai } from "chai";
var expect = chai.expect;

describe('App Component', () => {
    it('renders the Counter wrapper', () => {
        var result = isIncluded("Hello World", "World");
        expect(result.to.be.equal(true));
    });
});