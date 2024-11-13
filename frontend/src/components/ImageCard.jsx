import PropTypes from "prop-types";

const ImageCard = ({ image, deleteImage, saveImage }) => {
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
            {image.title?.toUpperCase()}
          </div>
          <p className="text-gray-700 text-base">{image.alt_description}</p>
        </div>
        <div className="px-6 py-6">
          {!image.saved && <button
            type="button"
            className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={() => saveImage(image.id)}
          >
            Save
          </button>}{" "}
          <button
            type="button"
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={() => deleteImage(image.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string,
    }),
    alt_description: PropTypes.string,
    title: PropTypes.string,
    saved: PropTypes.bool,
  }).isRequired,
  deleteImage: PropTypes.func.isRequired,
  saveImage: PropTypes.func,
};
export default ImageCard;
