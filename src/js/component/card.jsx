import React from "react";

const Card = (props) => {
	return (
		<div className="col">
			<div className="card shadow-sm">
				<img src={props.imgSrc} alt={props.imgAlt} />
				<div className="card-body">
					<h5 className="">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<div className="d-flex justify-content-around align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary">
								Find out more!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

console.log(
	Card({
		imgSrc: "image source",
		imgAlt: "image alt",
		title: "This is a title",
		text: "This is text.",
	})
);

export default Card;
