
import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [view, setView] = useState("books");

  const books = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 }
  ];


  const renderComponentIfElse = () => {
    if (view === "books") {
      return <BookDetails books={books} />;
    } else if (view === "blogs") {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  const renderTernary = (
    view === "books" ? <BookDetails books={books} /> :
    view === "blogs" ? <BlogDetails /> :
    <CourseDetails />
  );

  const renderLogicalAnd = (
    <>
      {view === "blogs" && <BlogDetails />}
    </>
  );


  const renderSwitch = () => {
    switch (view) {
      case "books":
        return <BookDetails books={books} />;
      case "blogs":
        return <BlogDetails />;
      case "courses":
        return <CourseDetails />;
      default:
        return <h2>Select a View</h2>;
    }
  };

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setView("books")}>Book Details</button>
      <button onClick={() => setView("blogs")}>Blog Details</button>
      <button onClick={() => setView("courses")}>Course Details</button>

      <hr />

     

      <h3>If-Else Rendering:</h3>
      {renderComponentIfElse()}

      <h3>Ternary Rendering:</h3>
      {renderTernary}

      <h3>Logical && Rendering (Only blogs show):</h3>
      {renderLogicalAnd}

      <h3>Switch Case Rendering:</h3>
      {renderSwitch()}
    </div>
  );
}

export default App;

