import "./bookshelf.css";

import coverBackUpSrc from "../assets/cover-backup.jpg";

function Bookshelf({
  booksData,
  onSetBooksList,
  currentBookData,
  onSetCurrentData,
}) {
  const deleteBookHandler = function (deleteIndex) {
    onSetBooksList((previousState) =>
      previousState.filter((_, index) => index != deleteIndex)
    );
  };

  return (
    <ul className="content-list">
      {booksData.length > 0 ? (
        booksData.map((book, index) => (
          <li
            key={book.isbn}
            onClick={() => {
              onSetCurrentData({ index, ...book });
            }}
            style={
              currentBookData?.index === index
                ? { background: "#5e2222", color: "white" }
                : undefined
            }
          >
            <div>
              <p
                className="id"
                style={
                  currentBookData?.index === index
                    ? { color: "white" }
                    : undefined
                }
              >
                Id: <span>{index + 1}</span>
              </p>
              <p className="field1">{book.title}</p>
              <p className="field2">{book.author}</p>
              <p
                className="field3"
                style={
                  currentBookData?.index === index
                    ? { color: "#ba6729" }
                    : undefined
                }
              >
                ISBN: {book.isbn}
              </p>
              <p
                className="field4"
                style={
                  currentBookData?.index === index
                    ? { color: "#ba6729" }
                    : undefined
                }
              >
                Price: ${book.price}
              </p>
              <p
                className="field5"
                style={
                  currentBookData?.index === index
                    ? { color: "#ba6729" }
                    : undefined
                }
              >
                {book.publicationDate.toDateString()}
              </p>
              <button
                className="deleteButton"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBookHandler(index);
                }}
              >
                Delete
              </button>
            </div>
            <img
              src={book.imgSrc || coverBackUpSrc}
              onError={(e) => (e.target.src = coverBackUpSrc)}
            />
          </li>
        ))
      ) : (
        <div className="empty-wrapper">
          <h3>Empty Bookshelf!</h3>
          <p>
            Your bookshelf is empty. Use the form provided on the right in order
            to add a new book.
          </p>
        </div>
      )}
    </ul>
  );
}

export default Bookshelf;
