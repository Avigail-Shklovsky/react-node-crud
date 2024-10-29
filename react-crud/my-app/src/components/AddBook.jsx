export const addBook = (newBookData, onSuccess) => {
    console.log('add comp');

    if (newBookData) {
        fetch(`http://localhost:5000/books`, {
            method: 'POST',
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
            .catch(error => console.error('Error adding book:', error));
    } else {
        console.log('Error: newBookData is undefined');
    }
};

