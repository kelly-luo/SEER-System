import React from 'react';

const CommentList = (props) => {
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Comments</h4></li>
            {props.comments.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentComment.bind(this,item)}>{item.firstName}</a>
            ))}
        </ul>
    </div> 
    );
}
 
export default CommentList;