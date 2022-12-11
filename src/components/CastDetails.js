import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/CastDetail.css";
function CastDetails() {
  const location = useLocation();
  const castId = location.state.detailId;
  const [data, setData] = useState([]);
  const baseImgUrl = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    let characters = async () => {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/person/${castId}?api_key=${process.env.REACT_APP_GROSSFLIX_API}`
        )
        .then((data) => data);

      setData(data.data);
    };
    characters();
  }, [castId]);
  const {
    name,
    profile_path,
    place_of_birth,
    birthday,
    biography,
    known_for_department,
  } = data;
  console.log(data);
  return (
    <div className="container">
      <div class="card-container">
        <img class="round" src={`${baseImgUrl}${profile_path}`} alt="user" />
        <h3>{name}</h3>
        <h4>{place_of_birth}</h4>
        <h4>{birthday}</h4>
        <p>{biography}</p>

        <div class="skills">
          <h6>Skills</h6>
          <ul>
            <li>{known_for_department}</li>
            <li>{known_for_department}</li>
            <li>{known_for_department}</li>
            <li>{known_for_department}</li>
            <li>J{known_for_department}</li>
            <li>{known_for_department}</li>
            <li>{known_for_department}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CastDetails;

//https://api.themoviedb.org/3/person/{person_id}/images?api_key=<<api_key>>
