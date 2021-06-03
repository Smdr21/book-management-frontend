import React, {useState} from 'react';

const NavBar = () => {

    return (
        <div className="nav-bar">
            <ul>
                <li className="list-item"><button className="btn">Add New Book</button></li>
                <li className="list-item"><button className="btn">List All Books</button></li>
            </ul>
        </div>
    );
}
export default NavBar;