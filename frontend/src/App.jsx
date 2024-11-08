import "./App.css";

import React, { useState } from "react";
import { Header, ImageGallery, Search } from "./components";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000"

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${API_URL}/new-image?query=${word}`
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
