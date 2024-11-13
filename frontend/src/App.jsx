import "./App.css";

import { useState, useEffect } from "react";
import { Header, ImageGallery, Search, Spinner } from "./components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Images downloaded successfully");
    } catch (error) {
      toast.error(error.message)
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
      toast.info(`New image ${word.toUpperCase()} found`);
    } catch (error) {
      toast.error(error.message)
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
      toast.info(`Image ${imageToSave.title.toUpperCase()} was saved`);
    } catch (error) {
      toast.error(error.message)
    }
  };

  const handleDeleteImage = async (id) => {
    const imageToDelete = images.find((image) => image.id === id);
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`, imageToDelete);
      if (res.data?.deleted_id) {
        toast.warning(
          `Image ${images
            .find((i) => i.id === id)
            .title.toUpperCase()} was deleted`
        );
        setImages((prevImages) =>
          prevImages.filter((image) => image.id !== id)
        );
      }
      getSavedImages(); // Refresh the saved images
    } catch (error) {
      toast.error(error.message)
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </>
  );
};

export default App;
