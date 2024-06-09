import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createGenre } from "../../http/filmAPI";

function CreateGenre({ show, onHide }) {
	const [value, setValue] = useState('');

	const addGenre = () => {
		createGenre({ name: value }).then(data => {
			setValue("");
			onHide();
		});
	};

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>Добавить жанр фильма</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Название жанра</Form.Label>
						<Form.Control
							value={value}
							onChange={(e) => setValue(e.target.value)}
							type="text"
							placeholder="Ужасы, Комедии..."
							autoFocus
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Описание жанра</Form.Label>
						<Form.Control
							as="textarea"
							placeholder="Введите краткое описание фильма(до 500 символов)"
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Удалить
				</Button>
				<Button variant="primary" onClick={addGenre}>
					Создать
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateGenre;
