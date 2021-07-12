import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <NavLink className="navbar-brand text-white ms-4 font-family-poppins" to="./" exact><i class="uil uil-react"> CRUD</i></NavLink>
            <div className="d-flex">
                <NavLink className="me-4 header active" to="all" exact>All Users</NavLink>
                <NavLink className="me-4 header" to="add" exact>Add User</NavLink>
            </div>  
        </nav>
    );
};

export default Navbar;
