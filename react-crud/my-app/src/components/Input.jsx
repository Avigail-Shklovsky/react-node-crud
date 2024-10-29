import React, { useState } from 'react';

const Input = ({ booksLength, onUpdate }) => {

    const [BookName, setBookName] = useState('');
    const [Author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        submitNewBook();
    };

    const submitNewBook = () => {

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: booksLength + 1,
                name: BookName,
                author: Author
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Book added:', data);
                onUpdate(); 
            })
            .catch(error => console.error('Error adding book:', error));
        clearForm();
        

    }

    const clearForm = () => {
        setBookName(''); 
        setAuthor('');   
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Book name:
                    <input
                        type="text"
                        placeholder='Book name'
                        value={BookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Author:
                    <input
                        type="text"
                        placeholder='Author'
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Input;
