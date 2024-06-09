import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/createBrand";
import CreateGenre from "../components/modals/createGenre";
import CreateFilm from "../components/modals/createFilm";
import { observer } from "mobx-react-lite";

const Admin = observer(() => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [genreVisible, setGenreVisible] = useState(false)
  const [filmVisible, setFilmVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button variant="dark" className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
      <Button variant="dark" className="mt-4 p-2" onClick={() => setGenreVisible(true)}>Добавить жанр</Button>
      <Button variant="dark" className="mt-4 p-2" onClick={() => setFilmVisible(true)}>Добавить фильм</Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
      <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}></CreateGenre>
      <CreateFilm show={filmVisible} onHide={() => setFilmVisible(false)}></CreateFilm>
    </Container>
  );
});

export default Admin;