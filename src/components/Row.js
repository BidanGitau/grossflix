import "../css/Row.css";
import React, { useEffect, useState } from "react";
import axios from "../hooks/api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link, Navigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClickk = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // const handleClick = (movie) => {
  //   Navigate();
  // };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        <Splide
          options={{
            rewind: true,
            autoWidth: true,
            pagination: false,
          }}
        >
          {movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Link to={`/characters/` + movie.id}>
                <LazyLoadImage
                  className={`row_poster  skeleton ${
                    isLargeRow && "row_posterLarge"
                  }`}
                  src={`${baseImgUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  effect="blur"
                  key={movie.id}
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : null}
      {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
    </div>
  );
};

export default Row;

//using local storage

// useEffect(() => {
//   async function fetchData() {
//     const retrieve = localStorage.getItem("popular");
//     if (retrieve) {
//       setMovies(JSON.parse(retrieve));
//     } else {
//       const request = await axios.get(fetchUrl);
//       const local = localStorage.setItem(
//         "popular",
//         JSON.stringify(request.data.results)
//       );

//       setMovies(local);
//     }
//   }
//   fetchData();
// }, [fetchUrl]);
