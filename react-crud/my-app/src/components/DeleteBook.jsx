export const deleteBook = (book, onSuccess) => {
    if (book) {
        fetch(`http://localhost:5000/books/${book.id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(() => {
                onSuccess();
            })
            .catch(error => console.error('Error deleting book:', error));
    } else {
        console.log('Error: book is undefined');
    }
};
