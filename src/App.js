import React from "react";
import SearchMovies from "./components/SearchMovies";
import "./App.css";

function App() {
  return (
    <div className="container">
      <main>
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </main>
    </div>
  );
}

export default App;
