import express from "express";
const app = express();

const port = 3000;

const books = [
  { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 5, name: "Moby-Dick", author: "Herman Melville" },
];

// middleware
app.use(express.json());

// CRUD

//  GET all books
app.get("./books", (req, res) => {
  res.json(books);
});

// get book by id
app.get("./books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// create a new book
app.post("./books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: req.body.name,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// update book
app.put("./books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  book.name = req.body.name;
  book.author.req.body.author;
  res.json(book);
});

// delete book
app.delete("./books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send("Book not found");

  const updatedBooks = books.splice(bookIndex, 1);
  res.json(updatedBooks);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
