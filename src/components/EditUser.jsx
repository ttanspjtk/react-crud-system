import React, { useState, useEffect } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';
import { 
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    makeStyles,
    Typography 
} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        fontFamily: 'Poppins, sans-serif',
        '& > *': {
            marginTop: 20
        }
    }
});

const initialValues = {
    name: '',
    age: '',
    email: '',
    position: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, age, email, position } = user;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push('/all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="age" value={age}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Position</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="position" value={position}/>
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails()} color="primary">Edit User</Button>
        </FormGroup>
    );
};

export default EditUser;
