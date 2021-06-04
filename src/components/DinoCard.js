import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DinoCard = ({ results, term, handleDeleteDino }) => {
	const renderedListed = results
		.sort((a, b) => (a.name < b.name ? -1 : 1))
		.filter((card) => {
			if (term === "") {
				return true;
			} else if (
				card.name.toLowerCase().includes(term.toLowerCase()) ||
				card.species.toLowerCase().includes(term.toLowerCase())
			) {
				return true;
			}
			return false;
		})
		.map((card) => {
			return (
				<StyledDinoCard key={card.id}>
					<CardHeader>
						<h1>{card.name}</h1>
						<h1>
							{card.gender}
							{/* <i className="fas fa-mars"></i> */}
							{/* <i className="fas fa-venus"></i> */}
						</h1>
						<div>
							<Link to="/edit-dino">
								<button>Edit</button>
							</Link>
							<button onClick={handleDeleteDino}>Delete</button>
						</div>
					</CardHeader>
					<h2>{card.species}</h2>
					<StyledCardDescription>{card.description}</StyledCardDescription>
				</StyledDinoCard>
			);
		});
	return <StyledCardContainer>{renderedListed}</StyledCardContainer>;
};

export default DinoCard;

const StyledCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 350px));
	justify-content: center;
	gap: 15px;
	width: 100%;
	height: 100%;
`;

const StyledDinoCard = styled.div`
	background-color: #60a5fa;
	color: #111827;
	font-weight: 400;
	border-radius: 5px;
	border: 1px solid #111827;
	padding: 1em 1.5em;
	width: 350px;
	height: 200px;

	h2 {
		font-size: 1.3em;
		padding-bottom: 0.8em;
	}
`;

const CardHeader = styled.div`
	font-size: 0.8em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	padding-bottom: 0.2em;
`;

const StyledCardDescription = styled.div`
	font-size: 0.9em;
`;
