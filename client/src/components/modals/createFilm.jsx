import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../../index';
import { fetchGenres, fetchBrands, fetchFilms, createFilm } from "../../http/filmAPI";
import { observer } from 'mobx-react-lite';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const CreateFilm = observer(({show, onHide}) => {
  const {film} = useContext(Context)

  const [name, setName] = useState('')
  // const [genre, setGenre] = useState(null)
  // const [brand, setBrand] = useState(null)
  const [year, setYear] = useState('')
  const [timing, setTiming] = useState('')
  const [age, setAge] = useState('')
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  const [mainImage, setMainImage] = useState(null)
  const [titleImage, setTitleImage] = useState(null)
  const [bgImage, setBgImage] = useState(null)

  useEffect(() => {
		fetchGenres().then((data) => film.setGenres(data));
		fetchBrands().then((data) => film.setBrands(data));
		fetchFilms().then((data) => film.setFilms(data.rows));
	}, []);

  const selectMainImage = e =>{
    setMainImage(e.target.files[0])
  }
  const selectTitleImage = e =>{
    setTitleImage(e.target.files[0])
  }
  const selectBgImage = e =>{
    setBgImage(e.target.files[0])
  }

  const addFilm = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('rating', `${rating}`)
    formData.append('timing', `${timing}`)
    formData.append('age', `${age}`)
    formData.append('brandId', film.selectedBrand.id)
    formData.append('genreId', film.selectedGenre.id)
    formData.append('year', year)
    formData.append('description', description)
    formData.append('img', mainImage)
    formData.append('titleImg', titleImage)
    formData.append('bgImg', bgImage)

    createFilm(formData).then(data => onHide())
  }

  return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить фильм</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="CreateGenre.ControlInput1">
              <Form.Label>Название фильма</Form.Label>
              <Form.Control className='whiteActiveElement'
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Введите название фильма"
                autoFocus
              />
            </Form.Group>
            <div className='d-flex gap-3' style={{flexWrap: 'wrap'}}><Dropdown>
              <DropdownToggle variant='secondary'>{film.selectedGenre.name || "Выберите жанр"}</DropdownToggle>
              <DropdownMenu>
                {film.genres.map(genre => 
                  <DropdownItem key={genre.id} onClick={() => film.setSelectedGenre(genre)}>{genre.name}</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle variant='secondary'>{film.selectedBrand.name || "Выберите бренд"}</DropdownToggle>
              <DropdownMenu>
                {film.brands.map(brand => 
                  <DropdownItem key={brand.id} onClick={() => film.setSelectedBrand(brand)}>{brand.name}</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>

            <Form.Group className="mb-3" controlId="CreateGenre.CreationYear">
              <Form.Control className='whiteActiveElement'
                value={year}
                onChange={e => setYear(Number(e.target.value))}
                type="text"
                placeholder="2024"
                />
                <Form.Label>Год создания</Form.Label>
              </Form.Group>
            <Form.Group className="mb-3" controlId="CreateGenre.CreationTiming">
              <Form.Control className='whiteActiveElement'
                value={timing}
                onChange={e => setTiming(e.target.value)}
                type="text"
                placeholder="2024"
                />
                <Form.Label>Время показа</Form.Label>
              </Form.Group>
            <Form.Group className="mb-3" controlId="CreateGenre.CreationAge">
              <Form.Control className='whiteActiveElement'
                value={age}
                onChange={e => setAge(Number(e.target.value))}
                type="text"
                placeholder="2024"
                />
                <Form.Label>Возрастные ограничения</Form.Label>
              </Form.Group>
            <Form.Group className="mb-3" controlId="CreateGenre.CreationYear">
              <Form.Control className='whiteActiveElement'
                value={rating}
                onChange={e => setRating(e.target.value)}
                type="text"
                placeholder="7.1"
                />
                <Form.Label>Рейтинг</Form.Label>
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3 mt-2"
              controlId="CreateGenre.Control1"
            >
              <Form.Label>Обложка фильма</Form.Label>
              <Form.Control
                onChange={selectMainImage}
                type='file'
                />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-2"
              controlId="CreateGenre.Control2"
              style={{borderBottom: 'none'}}
              >
              <Form.Label>Картинка названия</Form.Label>
              <Form.Control
               onChange={selectTitleImage}
               type='file' 
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-2"
              controlId="CreateGenre.Control3"
            >
              <Form.Label>Задний фон</Form.Label>
              <Form.Control
               onChange={selectBgImage}
               type='file' 
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание фильма</Form.Label>
              <Form.Control 
               value={description}
               onChange={e => setDescription(e.target.value)}
               as="textarea"
               placeholder='Введите краткое описание фильма(до 500 символов)'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Удалить
          </Button>
          <Button variant="primary" onClick={addFilm}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
  );
});

export default CreateFilm;