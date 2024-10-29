export const updateBook = (newBookData, onSuccess) => {
    if (newBookData) {
        fetch(`http://localhost:5000/books/${newBookData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBookData),
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
            .catch(error => console.error('Error updating book:', error));
    } else {
        console.log('Error: newBookData is undefined');
    }
};
