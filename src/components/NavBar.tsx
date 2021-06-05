import React, {useState} from 'react';

const NavBar = (props:any) => {

    return (
        <div className="nav-bar">
            <ul>
                <li className="list-item"><button onClick={()=>props.showBooks(false)} className="btn">Add New Book</button></li>
                <li className="list-item"><button onClick={()=>props.showBooks(true)} className="btn">List All Books</button></li>
            </ul>
        </div>
    );
}
export default NavBar;