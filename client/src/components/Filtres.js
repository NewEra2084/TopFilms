import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { Row, Col, Dropdown,NavItem,NavLink } from "react-bootstrap";
import { Context } from '..';

const Catalog = observer( () => {
  const {film} = useContext(Context);
  // const {user, darkMode} = useContext(Context)
  return (
      <Row style={{background: "gray", display: 'flex', justifyContent: "center", color: "white" }} className='filters__nav'>
        <Col md={2}>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Жанры</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => film.removeSelectedGenre()}>Очистить Жанры</Dropdown.Item>
              {film.genres.map(genre =>
              <Dropdown.Item key={genre.id} onClick={() => film.setSelectedGenre(genre)}>{genre.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={2}>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Студии</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item onClick={() => film.removeSelectedBrand()}>Очистить Бренды</Dropdown.Item>
            {film.brands.map(brand =>
              <Dropdown.Item key={brand.id} onClick={() => film.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={2}>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Рейтинг</Dropdown.Toggle>
            <Dropdown.Menu>          
              <Dropdown.Item onClick={() => film.setRating(0)}>Очистить Рейтинг</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(1)}>1+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(2)}>2+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(3)}>3+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(4)}>4+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(5)}>5+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(6)}>6+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(7)}>7+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(8)}>8+</Dropdown.Item>
              <Dropdown.Item onClick={() => film.setRating(9)}>9+</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
  );
})

export default Catalog;