import { Audio as Loader } from "react-loader-spinner";



const Spinner = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2">
        <Loader
          height="80"
          width="80"
          radius="9"
          color="#93c5fd"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </>
  );
};

export default Spinner;
