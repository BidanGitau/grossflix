import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Banner.css";
import "../css/Cast.css";
const Characters = () => {
  const [actors, setActors] = useState([]);
  const [data, setData] = useState([]);

  const { backdrop_path, original_title } = data;
  let { movieId } = useParams();
  const baseImgUrl = `https://image.tmdb.org/t/p/original/`;
  const navigate = useNavigate();
  useEffect(() => {
    let characters = async () => {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_GROSSFLIX_API}`
        )
        .then((data) => data);

      setActors(data.data.cast);
    };
    characters();
  }, [movieId]);

  //get banner
  useEffect(() => {
    let characters = async () => {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_GROSSFLIX_API}&language=en-US&page=1&include_adult=false`
        )
        .then((data) => data);

      setData(data.data);
    };
    characters();
  }, [movieId]);

  // const { poster_path } = data;
  function castId(id) {
    navigate(`/castDetails`, { state: { detailId: id } });
  }

  return (
    <>
      {" "}
      <header
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          backgroundSize: "cover",
          margintop: "20px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "600",
          }}
        >
          {original_title}
        </h1>
      </header>
      <div className="cast_details">
        {actors.slice(0, 20).map((actor) => {
          return (
            <div
              className="cast_desc"
              key={actor.id}
              onClick={() => castId(actor.id)}
            >
              <h3 className="cast_name" style={{ padding: "4px" }}>
                {actor.name}
              </h3>

              <LazyLoadImage
                src={`${baseImgUrl}${actor.profile_path}`}
                alt=""
                className="cast_img"
                key={actor.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/person/{person_id}/images?api_key=<<api_key>>
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
