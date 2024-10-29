import React, { useState, useEffect } from 'react';
import { updateBook } from './UpdateBook';
import { addBook } from './AddBook'

const Input = ({ newId, status, bookData, onSuccess, refreshBooks }) => {
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');



    useEffect(() => {
        if (status === 'update' && bookData) {
            setId(bookData.id)
            setBookName(bookData.name);
            setAuthor(bookData.author);
        } else {
            setBookName('');
            setAuthor('');
            setId(newId)
        }
    }, [status, bookData, newId]);


    const handleSubmit = (event) => {
        event.preventDefault();

        const newBookData = { id, name: bookName, author };

        if (status === 'add') {
            console.log('add from input', newBookData);
            addBook(newBookData, () => {
                onSuccess();
                refreshBooks();
            });
        } else if (status === 'update' && bookData) {
            console.log('update from input', newBookData);
            updateBook(newBookData, () => {
                onSuccess();
                refreshBooks();
            });
        }

        refreshBooks();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Book Name:
                        <input
                            type="text"
                            placeholder="Book name"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Author:
                        <input
                            type="text"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">{status === 'add' ? 'Add Book' : 'Update Book'}</button>
            </form>

        </>
    );


};

export default Input;
