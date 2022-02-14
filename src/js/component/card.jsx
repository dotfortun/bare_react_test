import React from "react";

const Card = (props) => {
	return (
		<div className="col">
			<div class="card shadow-sm">
				<img src={props.imgSrc} alt={props.imgAlt} />
				<div class="card-body">
					<h5 className="">{props.title}</h5>
					<p class="card-text">{props.text}</p>
					<div class="d-flex justify-content-around align-items-center">
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-sm btn-outline-secondary">
								Find out more!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
