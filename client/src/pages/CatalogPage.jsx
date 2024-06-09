import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {Container,Col} from "react-bootstrap";
import { Context } from "..";
import Filters from "../components/Filtres";
import FilmList from "../components/FilmList";
import { fetchGenres, fetchBrands, fetchFilms } from "../http/filmAPI";
import Pages from "../components/Pages";

const Catalog = observer(() => {
	const { film, darkMode } = useContext(Context);

	useEffect(() => {
		fetchGenres().then((data) => film.setGenres(data));
		fetchBrands().then((data) => film.setBrands(data));
		fetchFilms(null, null, 1, 1).then((data) => {
			film.setFilms(data.rows)
			film.setTotalCount(data.count)
		});
	}, []);

	useEffect(() => {
		fetchFilms(film.selectedGenre.id, film.selectedBrand.id, film.page, film.limit).then((data) => {
			film.setFilms(data.rows)
			film.setTotalCount(data.count)
		});
	}, [film.page,film.selectedGenre, film.selectedBrand])

	return (
		<div>
			<Filters />
			<Container
				className="whiteModeContainer pt-2"
				style={{ minHeight: "90vh" }}
			>
				<section
					style={{ border: "2px solid black", borderBottom: "none" }}
					className="d-flex mb-3 p-2"
				>
					{film.selectedGenre.name && !film.selectedBrand.name ? (
						<h4>
							Фильмы с жанром: <span>{film.selectedGenre.name}</span>
						</h4>
					) : !film.selectedGenre.name && film.selectedBrand.name ? (
						<h4>
							Фильмы с брендом: <span>{film.selectedBrand.name}</span>
						</h4>
					) : film.selectedGenre.name && film.selectedBrand.name ? (
						<h4>
							Фильмы с жанром: <span>{film.selectedGenre.name}</span> и брендом:{" "}
							<span>{film.selectedBrand.name}</span>
						</h4>
					) : (
						<h4>Все фильмы:</h4>
					)}
					{film.rating > 0 ? (
						<h4 style={{ marginLeft: "auto" }} className="pe-5">
							Рейтинг: <span>{film.rating}+</span>
						</h4>
					) : (
						""
					)}
				</section>
				<Col md={12}>
					<FilmList></FilmList>
					<Pages></Pages>
				</Col>
			</Container>
		</div>
	);
});

export default Catalog;
