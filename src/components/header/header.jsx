import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  console.log(searchData);

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  const linkClicked = () => {
    setQuery("");
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US&query=${query}&page=1`
    )
      .then((response) => response.json())
      .then((data) =>
        setSearchData(
          data?.results
            ?.sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10)
        )
      );
  }, [query]);

  return (
    <header className="flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" width="250px" />
      </Link>
      <div className="flex items-center relative">
        <div>
          <input
            value={query}
            onChange={inputChange}
            className="search p-1"
            type="text"
            width="200px"
          />
          <div className="absolute bg-purple-900 text-sm text-gray-100">
            {searchData?.length > 0
              ? searchData.map((movie) => (
                  <Link
                    onClick={linkClicked}
                    className="p-1 block size"
                    to={"/" + movie.id}
                    key={movie.id}
                  >
                    {movie.title}
                  </Link>
                ))
              : console.log("less than 0")}
          </div>
        </div>
        <i className="material-icons absolute right-0">search</i>
      </div>
    </header>
  );
};

export default Header;
