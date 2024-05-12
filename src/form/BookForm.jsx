import "./book-form.css";

import coverBackUpSrc from "../assets/cover-backup.jpg";
import { useEffect, useState } from "react";

function BookForm({ booksData, onAddBook, onUpdateBook, currentBookData }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (currentBookData) {
      setTitle(currentBookData.title);
      setAuthor(currentBookData.author);
      setIsbn(currentBookData.isbn);
      setPrice(currentBookData.price);
      setDate(currentBookData.publicationDate.toISOString().split("T")[0]);
      setUrl(currentBookData.imgSrc);
    }
  }, [currentBookData]);

  useEffect(() => {
    clearInputs();
  }, [booksData]);

  const saveBookData = function () {
    if (title && author && isbn && price != 0 && !Number.isNaN(price) && date) {
      onAddBook({
        title,
        author,
        isbn,
        price,
        publicationDate: new Date(date),
        imgSrc: url,
      });

      clearInputs();
    }
  };

  const updateBookData = function () {
    if (title && author && isbn && price != 0 && !Number.isNaN(price) && date) {
      onUpdateBook({
        title,
        author,
        isbn,
        price,
        publicationDate: new Date(date),
        imgSrc: url,
      });

      clearInputs();
    }
  };

  const clearInputs = function () {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPrice("");
    setDate("");
    setUrl("");
  };

  return (
    <form className="content-details" onSubmit={(e) => e.preventDefault()}>
      <div
        style={{
          backgroundImage: `url(${coverBackUpSrc})`,
        }}
      >
        <img
          src={url}
          onLoad={(e) => {
            e.currentTarget.style.display = "block";
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <input
        type="text"
        id="field1"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        id="field2"
        placeholder="Author"
        required
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type="text"
        id="field3"
        placeholder="ISBN"
        required
        value={isbn}
        onChange={(e) => {
          setIsbn(e.target.value);
        }}
      />
      <input
        type="number"
        id="field4"
        placeholder="Price"
        required
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        min={0}
        step={0.01}
      />
      <input
        type="date"
        id="field5"
        placeholder="Publication Date"
        required
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        type="text"
        id="url"
        placeholder="Cover Url"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button
        type="submitted"
        id="saveButton"
        onClick={currentBookData ? updateBookData : saveBookData}
      >
        Save
      </button>
      <button type="button" id="clearButton" onClick={clearInputs}>
        Clear
      </button>
    </form>
  );
}

export default BookForm;
