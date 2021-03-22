import React from "react";

const Footer = ({children}) => (
	<footer className="page-footer">
		<div className="container-fluid text-center">
			<p>Ann Cooper-Milne | React Google Books Search |  2021</p>
		</div>	
		{children}
	</footer>
);

export default Footer;