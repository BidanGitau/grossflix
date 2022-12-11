import React, { useEffect, useState } from "react";
import axios from "../hooks/api";
import query from "../request";
import "../css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(query.fetchNetflixOriginals);
      const randomId = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[randomId]);
    }

    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.origial_name}</h1>

        <button className="banner_button">PLay</button>
        <button className="banner_button">My List</button>

        <div className="banner_description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
      {/* title */}
      {/* div */}
      {/* describe('first', () => { second }) */}
    </header>
  );
}

export default Banner;
