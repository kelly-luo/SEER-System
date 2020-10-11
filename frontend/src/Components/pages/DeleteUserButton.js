import React from 'react'
import axios from 'axios'

function DeleteUserButton(user) {
    const getUser = Object.values(user);

    const deleteUser = (e) => {
        e.preventDefault();

        axios.delete(`/getUser/${getUser}`)
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
            <button onClick={(e)=>deleteUser(e)}>Delete user</button>
        </div>
    )
}

export default DeleteUserButton
