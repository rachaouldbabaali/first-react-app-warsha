import React from "react";
import { useState } from "react";

function PureComponent() {
  const [book, setBook] = useState({
    title: "book title",
    price: 2000,
    author: {
      name: "test name",
      phoneNumber: "+2130550",
    },
  });

  const [bugs, setBugs] = useState([
    { title: "bug1", fixed: false },
    { title: "bug2", fixed: true },
    { title: "bug3", fixed: false },
  ]);
  const handelAdd = () => {
    setBugs([...bugs, "bug4"]);
  };
  const handelRemove = () => {
    setBugs(bugs.filter((bug) => bug != "bug4"));
  };
  const handelEdit = () => {
    setBugs(bugs.map((bug) => (bug.title === "bug1" ? {...bug,fixed:true }: bug)));
  };

  const handelClick = () => {
    // console.log(book);
    // const newBook = {...book , author : {...book.author, name : "new author name"}}
    // setBook(newBook)
  };
  return (
    <>
      {/* <p key={book.price}>Book {book.title} {book.price}   </p>
      <p>author {book.author.name } {book.author.phoneNumber}</p>
      <button onClick={handelClick}> Change price</button> */}
      <div>
        <ul>
          {bugs.map((bug) => (
            <li key={bug.title}>{bug.title} {bug.fixed ? "fixed":"not fixed yet" }</li>
          ))}
        </ul>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelRemove}>Remove</button>
        <button onClick={handelEdit}>Edit</button>
      </div>
    </>
  );
}

export default PureComponent;
