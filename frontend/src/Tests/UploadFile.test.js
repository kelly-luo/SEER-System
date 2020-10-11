import { isIncluded } from '../Components/pages/UploadPage/UploadFile';
 
describe('App Component', () => {
    it('renders the Counter wrapper', () => {
        var expect = isIncluded("Hello World", "World");
        expect(true);
    });
});