import React from "react";
import { ImageCard } from "../components";

const ImageGallery = ({ images, deleteImage }) => {
  return (
    <>
      {images.length === 0 ? (
        <div className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 mt-4 rounded-md bg-blue-50/70 sm:py-20 lg:px-16">
            <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Images Gallery
            </h2>
            <p className="mt-4">
              This is simple application to search images using Unsplash API. In
              order to start enter any search term in the input field.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl p-4 mt-4">
          <div className="flex flex-wrap justify-center">
            {images.map((image, i) => (
              <ImageCard key={i} image={image} deleteImage={deleteImage} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
