import React, { Component } from 'react';
import '../pages/SearchResults.css'

export default class StudentTableRow extends Component {
    render() {
        return (
            <div className="info">
                <td>{this.props.obj.author}. ({this.props.obj.year}). {this.props.obj.title}. {this.props.obj.journal}, {this.props.obj.volume}({this.props.obj.number}), {this.props.obj.pages}.
                    </td>
                <a href={this.props.obj.url}>{this.props.obj.url}</a>
            </div>
        );
    }
}