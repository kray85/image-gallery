import "./App.css";

import React, { useState } from "react";
import { Header, Search } from "./components";

const App = () => {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };

  console.log(word)
  return (
    <>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </>
  );
};

export default App;
