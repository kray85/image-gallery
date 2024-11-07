import React from "react";
import {ImageCard} from "../components"

const ImageGallery = ({images, deleteImage}) => {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-7xl p-4 mt-4">
        <div className="flex flex-wrap justify-center">
          {images.map((image, i) => (
            <ImageCard key={i} image={image} deleteImage={deleteImage} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
