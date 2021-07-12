import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    homepage: {
        backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '100%',
        opacity: '0.9',
        fontFamily: 'Poppins, sans-serif',
        margin: '0'
    }
});

const Homepage = () => {
    const classes = useStyles();
    return (
        <div>
            <h2 
                className={classes.homepage} 
                style={{textAlign: 'center',
                        fontSize: '5rem',
                        padding: '7rem',
                        color: '#fff',
                        textShadow: '2px 2px 10px #333'}}
            >
                Crud System
            </h2>
        </div>
    );
};

export default Homepage;
