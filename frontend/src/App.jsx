import "./App.css";

import React, { useState } from "react";
import { Header, Search } from "./components";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([])

  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((error) => {
        console.log(error);
      });
      setWord("");
  };

  return (
    <>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </>
  );
};

export default App;
