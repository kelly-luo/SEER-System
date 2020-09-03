import React, { Component } from 'react';

export default class StudentTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.comment}</td>
            </tr>
        );
    }
}