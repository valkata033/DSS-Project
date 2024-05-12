import { useState } from "react";

import Bookshelf from "./bookshelf/Bookshelf";
import NavigationBar from "./navigation/NavigationBar";

import "./App.css";
import BookForm from "./form/BookForm";

const booksData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0-06-112008-4",
    price: "8.99",
    publicationDate: new Date("1925-07-11"),
    imgSrc:
      "https://www.google.com/imgres?q=The%20Great%20Gatsby&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7a%2FThe_Great_Gatsby_Cover_1925_Retouched.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Great_Gatsby&docid=CQKsQBfci-Y4eM&tbnid=2hTkBZS7B5GsOM&vet=12ahUKEwjGwo2Q2oiGAxWySvEDHZx1B9UQM3oECGsQAA..i&w=1129&h=1600&hcb=2&ved=2ahUKEwjGwo2Q2oiGAxWySvEDHZx1B9UQM3oECGsQAA",
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0-452-28423-4",
    price: "9.99",
    publicationDate: new Date("1949-06-08"),
    imgSrc:
      "https://m.media-amazon.com/images/I/81m-yfhwlfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0-316-76948-4",
    price: "9.49",
    publicationDate: new Date("1951-07-16"),
    imgSrc:
      "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0-14-143951-8",
    price: "5.99",
    publicationDate: new Date("1813-01-28"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71CR-BOauCL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0-15-690739-2",
    price: "11.49",
    publicationDate: new Date("1935-05-05"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71H-0fOURHL._AC_UF1000,1000_QL80_DpWeblab_.https://www.google.com/imgres?q=the%20hobbit&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1170358%2F&docid=DKwjYU7YKtlKzM&tbnid=0DI4gXtP1aJHXM&vet=12ahUKEwiT5MvM2oiGAxU6RPEDHYBbBQoQM3oECGEQAA..i&w=1000&h=1480&hcb=2&ved=2ahUKEwiT5MvM2oiGAxU6RPEDHYBbBQoQM3oECGEQAA",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "978-1-85326-008-7",
    price: "15.99",
    publicationDate: new Date("1954-10-18"),
    imgSrc:
      "https://www.google.com/imgres?q=the%20lord%20of%20the%20rings&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0120737%2F&docid=EG_nUnHoVl_RiM&tbnid=6-f04EV6lrjNxM&vet=12ahUKEwjeqobG24iGAxX3QvEDHTsEDEkQM3oECBcQAA..i&w=1978&h=2936&hcb=2&itg=1&ved=2ahUKEwjeqobG24iGAxX3QvEDHTsEDEkQM3oECBcQAA",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "978-0-14-143955-6",
    price: "8.99",
    publicationDate: new Date("1997-12-01"),
    imgSrc: "https://www.google.com/imgres?q=harry%20potter&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0241527%2F&docid=1sUXD6j3F3h_RM&tbnid=baSYSRhAq4lHJM&vet=12ahUKEwjXsrTl2oiGAxXUBNsEHQmoAnkQM3oECGIQAA..i&w=1972&h=2902&hcb=2&itg=1&ved=2ahUKEwjXsrTl2oiGAxXUBNsEHQmoAnkQM3oECGIQAA",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    isbn: "978-0-451-52634-2",
    price: "7.99",
    publicationDate: new Date("1945-08-17"),
    imgSrc:
      "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF894,1000_QL80_.jpg",
  },
];

function App() {
  const [booksList, setBooksList] = useState(booksData);
  const [currentBookData, setCurrentBookData] = useState(undefined);

  const addBookHandler = function (bookData) {
    setBooksList((previousState) => [...previousState, bookData]);
  };

  const updateBookHandler = function (updatedBookData) {
    const { index } = currentBookData;

    setBooksList((previousState) => {
      const updatedBooksList = [...previousState];
      updatedBooksList[index] = { ...updatedBookData };
      return updatedBooksList;
    });

    setCurrentBookData(undefined);
  };

  return (
    <div className="wrapper">
      <NavigationBar />
      <main className="main">
        <Bookshelf
          booksData={booksList}
          onSetBooksList={setBooksList}
          currentBookData={currentBookData}
          onSetCurrentData={setCurrentBookData}
        />
        <BookForm
          booksData={booksList}
          onAddBook={addBookHandler}
          onUpdateBook={updateBookHandler}
          currentBookData={currentBookData}
        />
      </main>
      <footer>DSS Project - Valentin Kostadinov</footer>
    </div>
  );
}

export default App;
