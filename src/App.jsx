import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'whatever-you-want'
      }
    })
      .then(response => {
        console.log(response.data);
        if (response.data.books) {
          setBooks(response.data.books);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [books]);

  return (
    <div>
      {books.map((book) =>
        <div key={book.id}>
          <p className='title'><b> {book.title} </b></p>
          <div className='book-i'>
            <img src={book.imageLinks.smallThumbnail} alt="Book cover"/>
            <p className='description'>{book.description}</p>
          </div>
          <p className='title'>{book.authors}</p>
          <hr />
        </div>
      )}
      {
        books.map((book) => {
          return <div key={book.id}>
            {/* <p className='title'>{books.title}</p> */}
          </div>
        })
      }
    </div>
  );
}

export default App;
