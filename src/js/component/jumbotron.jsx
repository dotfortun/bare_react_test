import React from "react";

const Jumbotron = (props) => {
	return (
		<div class="container-fluid py-5 text-white bg-dark">
			<h1 class="display-5 fw-bold">{props.title}</h1>
			<p class="col-md-8 fs-4">{props.text}</p>
			<button class="btn btn-primary btn-lg" type="button">
				{props.cta}
			</button>
		</div>
	);
};

export default Jumbotron;
