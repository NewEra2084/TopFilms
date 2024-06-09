import {
	Container,
	Image,
} from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { fetchOneFilm } from "../http/filmAPI";
import {MOVIE_ROUTE} from "../utils/consts";

const Film = observer(() => {
	const { favorite } = useContext(Context);
	const [FilmItem, setFilm] = useState({ info: [] });
	const { id } = useParams();

	useEffect(() => {
		fetchOneFilm(id).then((data) => setFilm(data));
	}, []);
	
	return (
		<div className="Film-Page__bg-img" style={{ "--bg-img": `url(${process.env.REACT_APP_API_URL + FilmItem.bgImg})`}}>
			<Container>
				<Image
					src={process.env.REACT_APP_API_URL + FilmItem.titleImg}
					width={300}
					className="Film-Page__title-img"
				></Image>
				<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
					{FilmItem.rating > 6 ? (
						<div
							className="filmCard__rating green filmPage__rating"
						>
							{FilmItem.rating}
						</div>
					) : (
						<div className="filmCard__rating red filmPage__rating">{FilmItem.rating}</div>
					)}
					<h3 className="filmCard__also ms-4 pt-1">{FilmItem.year}</h3>
					<h3 className="filmCard__also ms-4 pt-1">{FilmItem.timing}</h3>
					<h3 className="filmCard__also ms-4 pt-1">{FilmItem.age}+</h3>
				</div>

				<p
					className="filmCard__also"
					style={{
						fontSize: "1.2em",
						marginTop: "10vh",
						marginBottom: "10vh",
						maxWidth: "650px",
					}}
				>
					{FilmItem.description}
				</p>
				<div className="playerButtons">
					<NavLink to={MOVIE_ROUTE} style={{textDecoration: 'none'}}>
						<button className="playButton">
							<i className="playButtonIco"></i>Смотреть фильм
						</button>
					</NavLink>
					{favorite.favorite ? (
						<button
							className="likeButton"
							title="Удалить из понравившегося"
							onClick={() => {
								favorite.setFavorite(false);
								console.log(favorite);
							}}
						>
							<i className="likeButtonIco-Active" id="favoriteButton"></i>
						</button>
					) : (
						<button
							className="likeButton"
							title="Добавить в понравившееся"
							onClick={() => {
								favorite.setFavorite(true);
								console.log(favorite);
							}}
						>
							<i className="likeButtonIco-Unactive" id="favoriteButton"></i>
						</button>
					)}
				</div>
			</Container>
		</div>
	);
});

export default Film;
