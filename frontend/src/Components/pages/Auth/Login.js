import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from "reactstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "./Register.css"
import {login} from "../../actions/authActions"
import {clearErrors} from '../../actions/errorAction'
import "./Button.css"


class Login extends Component {

    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
            if(error.id === "LOGIN_FAIL"){
               this.setState({msg: error.msg})
            }else{
                this.setState({msg:null});
            }
        }

        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSumbit = e =>{
        e.preventDefault();

        const {email, password} = this.state;

        const user = {
            email,
            password
        }

        this.props.login(user);


        
    }

    render(){
        return(
            <div>
                <button className="nav-link active" onClick={this.toggle}>Login</button>
                <Modal isOpen = {this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle = {this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.onSumbit}>
                            <FormGroup>

                                <Label for="email">Email</Label>
                                <Input type = "email" name="email" id="email" className="mb-3" placeholder="Email" onChange={this.onChange}></Input>

                                <Label for="password">Password</Label>
                                <Input type = "password" name="password" id="password" className="password"  placeholder="Password" onChange={this.onChange}></Input>
                                
                                <Button color = 'dark' style={{marginTop: '2rem'}} block>Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(
    mapStateToProps,
    {login, clearErrors}
)(Login)

