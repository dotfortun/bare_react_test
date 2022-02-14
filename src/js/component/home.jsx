import React from "react";

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Carousel from "./carousel.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<Jumbotron
				title="A Warm Welcome!"
				text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam animi amet corrupti vitae suscipit deleniti repellendus iste modi enim, quasi est, quos praesentium ullam optio esse vero maiores iusto. Eaque?"
				cta="Call to action!"
			></Jumbotron>
			<Carousel></Carousel>
			<Footer></Footer>
		</div>
	);
};

export default Home;
