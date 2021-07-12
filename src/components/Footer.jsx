import React from 'react';
import { makeStyles } from '@material-ui/styles';
import styles from './styles.css';

const useStyles = makeStyles({
    footer: {
        fontFamily: 'Poppins, sans-serif',
        background: '#212529',
        color: '#fff',
        height: '4rem',
        padding: '0',
        margin: '0',
        textAlign: 'left',
        padding: '1.5rem',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            © 2021, ttanspjtk.
            <a href="https://line.me/ti/p/_Xxn0j13m2" target="_blank" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '1rem', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-line"></i>
            </a>
            <a href="mailto:wariyaspjtk@gmail.com" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '15px', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-envelope"></i>
            </a>
            <a href="https://github.com/ttanspjtk" target="_blank" class="footer__icon">
                <i style={{color: '#fff', float: 'right', marginRight: '15px', fontSize: '20px', display: 'flex', alignItems: 'center'}} class="uil uil-github-alt"></i>
            </a>
        </div>
        
    );  
};

export default Footer;
