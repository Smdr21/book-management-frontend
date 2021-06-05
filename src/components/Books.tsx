import React, {useState, useEffect} from 'react';
import Book from './Book';

const Books = (props: any) => {
    return (
        <table className="books-table">
            <tr className="book-table-row">
                <th className="tcell-id tcell-styl">ID</th>
                <th className="tcell-title tcell-styl">Title</th>
                <th className="tcell-author tcell-styl">Author</th>
                <th className="tcell-price tcell-styl">Price</th>
                <th className="tcell-action">Actions</th>
            </tr>
            <Book></Book>
        </table>
    );
}
export default Books;