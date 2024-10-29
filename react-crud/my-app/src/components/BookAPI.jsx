import React, { useEffect, useState } from 'react'
import Input from './Input'

export const BookAPI = () => {
    const [books, setBooks] = useState([]);
    const [change, setChange] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, [change]);

const updateArray = ()=>{
    setChange(prevChange => prevChange + 1);
}
    return (
        <div>
            <h2>Book API</h2>
            <Input booksLength={books.length} onUpdate={updateArray}></Input>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.name} by {book.author}</li>
                ))}
            </ul>

        </div>
    )
}
