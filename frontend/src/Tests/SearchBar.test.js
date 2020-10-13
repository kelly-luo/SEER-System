import React from 'react';
import { render } from '@testing-library/react';
import search from '../Components/pages/SearchResults';
import axios from 'axios';
import { expect } from 'chai';


describe('Search Testing', function(){


    let list;
    beforeEach(function(){
        list= ["apple","banana","cat","dog","emerald"]
    })

    it('search is defined', function(){
        expect(search).to.be.not.undefined;
    })

    it('filter test', function(){
        expect(search)
    })
})