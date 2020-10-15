import React from 'react';
import ReactDOM from 'react-dom'
import DeleteUserButton from '../Components/pages/DeleteUserButton';
import ArticleForm from '../Components/pages/UploadPage/ArticleForm'
import AnalystReview from '../Components/Review/AnalystReview';

test("Renders delete user button", ()=>{
    const root = document.createElement("div");
    ReactDOM.render(<DeleteUserButton/>, root);
    expect(root.querySelector("button").textContent).toBe("Delete user");
})

test("Renders Author label in article form", ()=>{
    const root = document.createElement("div");
    ReactDOM.render(<ArticleForm/>, root);
    expect(root.querySelector("label").textContent).toBe("Author");
})

test("Renders login button", ()=>{
    const root = document.createElement("div");
    ReactDOM.render(<AnalystReview/>, root);
    expect(root.querySelector("button").textContent).toBe("Review");
})
