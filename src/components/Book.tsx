import React, {useState} from 'react';

const Book = () => {

    return (
        <tr className="book-table-row">
            <td className="tcell-id tcell-styl">3</td>
            <td className="tcell-title tcell-styl">Thinking in Java</td>
            <td className="tcell-author tcell-styl">Bruce Eckel</td>
            <td className="tcell-price tcell-styl">25.32</td>
            <td className="tcell-action"><a>Edit</a> <a>Delete</a></td>
        </tr>
    );
}
export default Book;