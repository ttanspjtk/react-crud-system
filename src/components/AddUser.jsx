import React, { useState, useEffect } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';
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
        '& > *': {
            marginTop: 20
        },
    }
});

const initialValues = {
    name: '',
    age: '',
    email: '',
    position: ''
}

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, age, email, position } = user;
    const classes = useStyles();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography style={{fontFamily: 'Poppins, sans-serif'}} variant="h4">Add User</Typography>
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
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
    );
};

export default AddUser;
