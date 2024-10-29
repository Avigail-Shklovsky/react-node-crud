import React from 'react'

export const UpdateBook = ({book}) => {


    const updateBook = (id, updatedName, updatedAuthor) => {
        fetch(`http://localhost:5000/books/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: updatedName, author: updatedAuthor }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Book updated:', data);
            // Optionally, refresh the list of books here
          })
          .catch(error => console.error('Error updating book:', error));
      };
      

  return (
    <div>
<button onClick={updateBook(book.id,)}></button>
    </div>
  )
}
