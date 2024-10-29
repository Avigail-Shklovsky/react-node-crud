import React, { useEffect, useState } from 'react'
import Input from './Input'
import { deleteBook } from './DeleteBook';

export const BookAPI = () => {
    const [books, setBooks] = useState([]);
    const [change, setChange] = useState(0);
    const [inputStatus, setInputStatus] = useState('add');
    const [selectedBook, setSelectedBook] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, [change]);

    const refreshBooks = () => {
        setChange(prevChange => prevChange + 1);
    }

    const handleUpdateClick = (book) => {
        setInputStatus('update');
        setSelectedBook(book);
    };

    const getNextId = () => {
        return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;;
    };
    const handleDeleteClick = (book) => {
        console.log('delete', book);

        deleteBook(book, () => {
            refreshBooks();
        });

    };
    return (
        <div>
            <h2>Book API</h2>
            <Input
                newId={getNextId()}
                status={inputStatus} bookData={selectedBook} onSuccess={() => {
                    refreshBooks();
                    setInputStatus('add');
                    setSelectedBook(null);
                }}
                refreshBooks={refreshBooks}></Input>

            <ul>
                {books.map(book => (
                    <>
                        <li key={book.id}>
                            {book.name} by {book.author}
                            <button onClick={() => handleUpdateClick(book)}>Update</button>
                            <button onClick={() => handleDeleteClick(book)}>Delete</button>
                        </li>

                    </>
                ))}
            </ul>

        </div>
    )
}
