import React, { Component } from "react";
import img from "../../img/peelcompany-removebg-preview.png"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-warning">
		<img className= "h-25 w-25"src= {img} alt = "peel-img"/>
		<p>© Copyright 2024, peel. </p>
	</footer>
);
