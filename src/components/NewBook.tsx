import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const NewBook = () => {
    type FormValues = {
        title: String,
        author: String,
        price: number
    };

    const {register, handleSubmit } = useForm<FormValues>();
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="new-form">
            <label>Book Title</label>
            <input {...register("title")} type="text" name="title"/>
            <label>Author</label>
            <input {...register("author")} type="text" name="author"/>
            <label>Price</label>
            <input {...register("price")} type="number" name="price"/>
            <button type= "submit" className="btn btn-form"> Add Book</button>
        </form>
    );
}
export default NewBook;