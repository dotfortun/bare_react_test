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
			<Jumbotron></Jumbotron>
			<Carousel></Carousel>
			<Footer></Footer>
		</div>
	);
};

export default Home;
