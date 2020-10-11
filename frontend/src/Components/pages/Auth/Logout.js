import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes  from "prop-types"
import "./Button.css"

export class Logout extends Component {
    static propTypes ={
        logout : PropTypes.func.isRequired
    }
    render() {
        return (
           <Fragment>
               <button className = 'nav-link active' onClick={this.props.logout}><a className="link" href={window.location.href.includes("search")? window.location.href: '/'}>Logout</a></button>
           </Fragment>
        )
    }
}

export default connect(
    null, 
    { logout })
(Logout);