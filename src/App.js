import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import MyNavbar from "./components/MyNavbar";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
const App = () => {
  const [showSearchResults, setShowSearchResults] = useState("");

  return (
    <div>
      <BrowserRouter>
        <MyNavbar showSearchResult={setShowSearchResults} />
        <Routes>
          <Route path="/details/:movieId" element={<MovieDetails />} />
          <Route
            path="/"
            element={<Home showSearchResults={showSearchResults} />}
          />
          {/* <Route path="/">
            <Home showSearchResults={showSearchResults} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
