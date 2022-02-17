import React from "react";

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Carousel from "./carousel.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

/*
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
<Card
	imgSrc="https://placekitten.com/507"
	imgAlt="A cute kitten."
	title="Yet another cute kitten."
	text="Gériboire de viande à chien de maudite marde de torrieux de saint-cimonaque de ciarge."></Card>
 */

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<Jumbotron
				title="A Warm Welcome!"
				text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
				cta="Call to action!"></Jumbotron>
			<Carousel
				cards={[
					{
						imgSrc: "https://placekitten.com/500",
						imgAlt: "A cute kitten.",
						title: "The first cute kitten",
						text: "Lorem ipsum dolor sit amet, adipisicing irure exercitation consectetur Lorem id laborum aliqua veniam enim.",
					},
					{
						imgSrc: "https://placekitten.com/500",
						imgAlt: "A cute kitten.",
						title: "The first cute kitten",
						text: "Lorem ipsum dolor sit amet, adipisicing irure exercitation consectetur Lorem id laborum aliqua veniam enim.",
					},
					{
						imgSrc: "https://placekitten.com/502",
						imgAlt: "A cute kitten.",
						title: "The third cute kitten",
						text: "Lorem ipsum dolor sit amet, nulla officia reprehenderit tempor in.",
					},
					{
						imgSrc: "https://placekitten.com/500",
						imgAlt: "A cute kitten.",
						title: "The first cute kitten",
						text: "Lorem ipsum dolor sit amet, adipisicing irure exercitation consectetur Lorem id laborum aliqua veniam enim.",
					},
				]}></Carousel>
			<Footer></Footer>
		</div>
	);
};

export default Home;
