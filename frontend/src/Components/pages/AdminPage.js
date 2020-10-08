import React,{useState,useEffect} from 'react'
import axios from 'axios'
import * as ReactBootStrap from "react-bootstrap"
import NavBar from './NavBar'
import ChangeRole from './ChangeRole';

function AdminPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/getUser')
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    const renderUsers = (user, index) => {
        return (
            <tr className="results" key={index} data-href={user.url}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><ChangeRole page="getUser" user={user}></ChangeRole></td>
            </tr>
        );
    }


    return (
        <div>
            <NavBar></NavBar>
            <center><h3 className="reqAnalyse">Users: {users.length}</h3></center>
            <div className='analystDataTable'>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(renderUsers)}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </div>
    )
}

export default AdminPage
