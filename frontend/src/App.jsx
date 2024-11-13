import "./App.css";

import { useState, useEffect } from "react";
import { Header, ImageGallery, Search } from "./components";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  // Fetch saved images for page load
  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  // Load saved images on page load
  useEffect(() => {
    getSavedImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <div className="min-h-screen">
        <ImageGallery images={images} deleteImage={handleDeleteImage} />
      </div>
    </>
  );
};

export default App;
