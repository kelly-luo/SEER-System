import ch from 'chai';
const { expect } = ch;

import pkg from 'enzyme';
const { mount, render, shallow, configure} = pkg;

import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;