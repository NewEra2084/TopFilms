import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { createBrand } from "../../http/filmAPI";

function CreateBrand({show, onHide}) {
  const [value, setValue] = useState('');

	const addBrand = () => {
		createBrand({ name: value }).then(data => {
			setValue("");
			onHide();
		});
	};

  return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить киностудию</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название студии</Form.Label>
              <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="paramount, 20th Century Fox..."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание студии</Form.Label>
              <Form.Control as="textarea" placeholder='Введите краткое описание фильма(до 500 символов)' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Удалить
          </Button>
          <Button variant="primary" onClick={addBrand}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default CreateBrand;