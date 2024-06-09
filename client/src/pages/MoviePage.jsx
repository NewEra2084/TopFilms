import React from "react";
import { Container } from "react-bootstrap";

const Movie = () => {

  return (
      <iframe title="movie" style={{width: '100%', height: '93vh'}} src={process.env.REACT_APP_API_URL + '720.mp4'}></iframe>
  );
};

export default Movie;