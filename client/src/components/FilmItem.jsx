import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { FILM_ROUTE } from "../utils/consts";

function FilmItem({ Film }) {
  const navigate = useNavigate()
	return (
		<Col lg={3} md={4} sm={6} onClick={() => navigate(FILM_ROUTE + "/" + Film.id)}>
			<Card
				style={{ width: 224, height: 311, cursor: "pointer", borderRadius: "13px" }}
				border={"dark"}
				className="filmCard mt-3"
			>
				<Image
					width={"100%"}
					height={"100%"}
					src={process.env.REACT_APP_API_URL + Film.img}
					style={{ borderRadius: 12 }}
				></Image>
				<div className="filmCard__info">
					<div className="filmCard__info-above">
						<div>Civil War</div>
						{ Film.rating > 6 ?
						<div className="filmCard__rating green">{Film.rating}</div> 
						: <div className="filmCard__rating red">{Film.rating}</div>
						}
					</div>
					<div className="filmCard__also pt-1">
						{Film.year} <span> </span>
						{Film.age}+
					</div>
				</div>
			</Card>
		</Col>
	);
}

export default FilmItem;
