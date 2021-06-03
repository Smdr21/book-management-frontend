import React, {useState} from 'react';
import Books from './Books';
import NewBook from './NewBook';

const Body = () => {

    const [toggleBooksList, setToggleBooksList] = useState(true);



    return (
        <div>
            <h2 className="books-title">List of Books</h2>
            <div className="books-body">
                {/*<Books></Books>*/}
                <NewBook></NewBook>
                
            </div>
        </div>
    );
}
export default Body;