import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { Row } from "react-bootstrap";
import { Context } from '..';
import FilmItem from './FilmItem';

const FilmList = observer( () => {
  const {film} = useContext(Context);
  return (
    <Row className='d-flex'>
      {film.films.map(Film => 
        (Film.rating > film.rating) ?
          <FilmItem key={Film.id} Film={Film}></FilmItem>
        : ''
      )}
    </Row>
  )
})

export default FilmList;