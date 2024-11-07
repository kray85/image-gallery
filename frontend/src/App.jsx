import "./App.css";

import React, { useState } from "react";
import { Header, ImageGallery, Search } from "./components";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((error) => {
        console.log(error);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <div className="min-h-screen bg-gray-100">
        <ImageGallery images={images} deleteImage={handleDeleteImage} />
      </div>
    </>
  );
};

export default App;
