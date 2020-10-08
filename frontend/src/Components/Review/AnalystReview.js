import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap"
import axios from 'axios'

function AnalystReview(article) {

    const getArticle = Object.values(article);

    const [state, setState] = useState([{
        modal: false,
        description: '',
        url: '',
        DOI: '',
        seMethods: '',
    }]);

    const toggle = () => {
        setState({
            modal: !state.modal
        });
    };

    const onChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(`/analyst`, {
            author: getArticle[0].author,
            title: getArticle[0].title,
            journal: getArticle[0].journal,
            year: getArticle[0].year,
            volume: getArticle[0].volume,
            number: getArticle[0].number,
            pages: getArticle[0].pages,
            month: getArticle[0].month,
            url: state.url,
            DOI: state.DOI,
            seMethods: state.seMethods,
            description: state.description
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })

        axios.delete(`/analyst/${getArticle[0]._id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })
        window.location.reload();
    }

    return (
        <div>
            <button className='nav-link active' onClick={toggle}>Review</button>
            <Modal isOpen={state.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Analyse</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" name="description" id="description" className="mb-3" placeholder="Description" onChange={onChange}></Input>

                            <Label for="url">URL</Label>
                            <Input type="text" name="url" id="url" className="mb-3" placeholder="URL" onChange={onChange}></Input>

                            <Label for="DOI">DOI</Label>
                            <Input type="text" name="DOI" id="DOI" className="mb-3" placeholder="DOI" onChange={onChange}></Input>

                            <Label for="seMethods">Software Engineering Methods</Label>
                            <Input type="seMethods" name="seMethods" id="seMethods" className="mb-3" placeholder="Eg: TDD, BDD" onChange={onChange}></Input>

                            <Button color='dark' style={{ marginTop: '2rem' }} block>Submit</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AnalystReview
