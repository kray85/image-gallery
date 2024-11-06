import React from "react";

const Search = ({word, setWord, handleSubmit }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex justify-center items-center w-full sm:w-[70%]">
            <div className="flex-grow">
              <input
                id="text"
                name="text"
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Search for images..."
                className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div className="ml-4">
              <button
                type="submit"
                className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
