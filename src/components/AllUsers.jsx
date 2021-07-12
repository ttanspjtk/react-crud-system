import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <table class="table ">
            <thead>
                <tr class="table-secondary">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Position</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.position}</td>
                            <td>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EditIcon />}
                                style={{marginRight: 10}}
                                component={Link}
                                to={`/edit/${user.id}`}
                            >
                                Edit
                            </Button>
                            <button 
                                type="button" 
                                class="btn btn-outline-danger"
                                onClick={() => deleteUserData(user.id)}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default AllUsers;
