import React from "react";
import Card from "./card.jsx";

const Carousel = () => {
	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<Card
						imgSrc="https://placekitten.com/500"
						imgAlt="A cute kitten."
						title="The first cute kitten"
						text="Lorem ipsum dolor sit amet, adipisicing irure exercitation consectetur Lorem id laborum aliqua veniam enim."></Card>
					<Card
						imgSrc="https://placekitten.com/505"
						imgAlt="A cute kitten."
						title="Another cute kitten"
						text="Lorem ipsum dolor sit amet, exercitation labore sunt cillum amet do officia amet."></Card>
					<Card
						imgSrc="https://placekitten.com/502"
						imgAlt="A cute kitten."
						title="The third cute kitten"
						text="Lorem ipsum dolor sit amet, nulla officia reprehenderit tempor in."></Card>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
