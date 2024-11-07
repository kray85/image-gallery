import React from "react";


const Header = ({ title }) => {
  return (
    <>
      <div className="bg-blue-400 py-10 sm:py-12 mb-7">
        <div className="mx-auto max-w-7xl px-3 lg:px-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
             {title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
