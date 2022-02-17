import React from "react";
import Card from "./card.jsx";

const Carousel = (props) => {
	const cards = props.cards.map((elem) => {
		return (
			<Card
				imgSrc={elem.imgSrc}
				imgAlt={elem.imgAlt}
				title={elem.title}
				text={elem.text}></Card>
		);
	});
	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{cards}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
