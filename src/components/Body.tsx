import React, {useState,useEffect} from 'react';
import Books from './Books';
import NewBook from './NewBook';
import axios from 'axios';

const Body = (props: any) => {
    const [bookList, setBookList] = useState();
    useEffect(()=>{
        getBooks();
    },[])

    const getBooks = () =>{
        axios.get("http://localhost:8080/bookcenter/").then((res)=>{
            setBookList(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h2 className="books-title">List of Books</h2>
            <div className="books-body">
                {props.toggleBooksList ? <Books></Books> : <NewBook></NewBook>}
            </div>
        </div>
    );
}
export default Body;