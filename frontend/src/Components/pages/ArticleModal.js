import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from "reactstrap"
import axios from 'axios'

function ArticleModal(id) {

    const getArticle = Object.values(id);

    const [article, setArticle] = useState([]);

    const [state, setState] = useState([{
        modal: true,
    }]);

    const retriveArticles = () => {
        axios.get(`/articles/${getArticle}`)
            .then(response => {
                setArticle(response.data)
            })
    }



    const toggle = () => {
        setState({
            modal: !state.modal
        });
    };

    return (
        <div>
            <button className='nav-link active' onClick={() => { toggle(); retriveArticles(); }}>View Details</button>
            <Modal isOpen={state.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{article.title}</ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
        </div>
    )
}

export default ArticleModal
