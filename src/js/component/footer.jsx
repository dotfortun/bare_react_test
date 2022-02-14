import React, { useState } from "react";

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());
	return (
		<footer class="footer mt-auto py-3 bg-dark">
			<div class="container">
				<span class="text-muted">
					Copyright &copy; {year} Shane Bell
				</span>
			</div>
		</footer>
	);
};

export default Footer;
