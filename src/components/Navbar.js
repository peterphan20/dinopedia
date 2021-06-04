import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledLogo>Dinopedia 🦖</StyledLogo>
			<StyledButtonContainer>
				<Link to="/">
					<StyledButton>Home</StyledButton>
				</Link>
				<Link to="/create-dino">
					<StyledButton>Add Dino</StyledButton>
				</Link>
			</StyledButtonContainer>
		</StyledNavbar>
	);
};

export default Navbar;

const StyledNavbar = styled.div`
	background-color: #e5e7eb;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 10em 1em 10em;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	z-index: 10;

	&:hover {
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
	}
`;

const StyledLogo = styled.div`
	color: #111827;
	font-size: 1.8em;
	font-weight: 700;
`;

const StyledButtonContainer = styled.div`
	display: flex;
	gap: 3em;
`;

const StyledButton = styled.button`
	background-color: #60a5fa;
	color: #111827;
	font-size: 1em;
	border: none;
	border-radius: 5px;
	outline: none;
	padding: 0.5em 1.5em;

	&:hover {
		background-color: #2563eb;
		cursor: pointer;
	}
`;
