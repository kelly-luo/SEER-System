import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios'

function ChangeRole(user) {
    const getUser = Object.values(user);
    const [role, setRole] = useState();

    const submitRole = (role) =>{
        axios.put(`/${getUser[0]}/${getUser[1]._id}`,{
            role : role
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })
        window.location.reload();
    }

    const changeRole = (e) => {
        e.preventDefault();
        setRole(e.target.textContent);
        console.log(role)
        setRole((role) =>{
            submitRole(role);
        });
    }
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={getUser[1].role}>
                <Dropdown.Item onClick={(e) => changeRole(e)}>admin</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeRole(e)}>moderator</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeRole(e)}>analyst</Dropdown.Item>
                <Dropdown.Item onClick={(e) => changeRole(e)}>registeredUser</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default ChangeRole
