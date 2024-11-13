import "./App.css";

import { useState, useEffect } from "react";
import { Header, ImageGallery, Search, Spinner } from "./components";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch saved images for page load
  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
      setLoading(false);
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

  const handleSaveImage = async (id) => {
    const imageToSave = images.find((image) => image.id === id);
    imageToSave.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToSave);
      if (res.data?.inserted_id) {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = async (id) => {
    const imageToDelete = images.find((image) => image.id === id);
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`, imageToDelete);
      getSavedImages(); // Refresh the saved images
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <div className="min-h-screen">
            <ImageGallery
              images={images}
              deleteImage={handleDeleteImage}
              saveImage={handleSaveImage}
            />
          </div>
        </>
      )}
    </>
  );
};

export default App;
