import React from "react";
import request from "../request";
import Row from "./Row";
function MovieCategory() {
  const titles = [
    "Netflix Originals",
    "Trending Movies",
    "Documentary Movies",
    "Romance Movies",
    "Horror Movies",
    "Top Rated Movies",
    "Comedy Movies",
    "Horror Movies",
  ];
  let i = 0;
  let categories = Object.keys(request).map((item) => {
    console.log(item);
    return <Row title={titles[i++]} fetchUrl={request[item]} />;
  });
  return categories;
}

export default MovieCategory;
