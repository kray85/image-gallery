import React from "react";
import {ImageCard} from "../components"

const ImageGallery = ({images}) => {
  return (
    <>
      {" "}
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex flex-wrap justify-center">
          {images.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
