import React from "react";

const ImageCard = ({ image, deleteImage }) => {
  console.log(image);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
        <img
          className="w-full h-52 object-cover"
          src={image.urls?.small}
          alt={image.alt_description}
          height="h-64"
        />
        <div className="px-6 py-6">
          <div className="font-bold text-xl mb-2">
            {image.title.toUpperCase()}
          </div>
          <p className="text-gray-700 text-base">{image.alt_description}</p>
        </div>
        <div className="px-6 py-6">
          <button
            type="button"
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={() => deleteImage(image.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
