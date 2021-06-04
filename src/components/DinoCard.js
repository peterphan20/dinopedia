import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DinoCard = ({ results, term, handleDeleteDino, handleEditDino }) => {
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
				<StyledDinoCard key={card._id}>
					<CardHeader>
						<StyledNameGender>
							<h1>{card.name}</h1>
							<h1>
								{card.gender === "Male" ? (
									<i className="fas fa-mars"></i>
								) : (
									<i className="fas fa-venus"></i>
								)}
							</h1>
						</StyledNameGender>
						<StyledEditDelete>
							<Link to="/edit-dino">
								<button id={card._id} onClick={() => handleEditDino(card._id)}>
									Edit
								</button>
							</Link>
							<button id={card._id} onClick={() => handleDeleteDino(card._id)}>
								Delete
							</button>
						</StyledEditDelete>
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
	grid-template-columns: repeat(3, minmax(0, 400px));
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
	width: 400px;
	height: 200px;

	h2 {
		font-size: 1.3em;
		padding-bottom: 0.6em;
	}
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 0.2em;
`;

const StyledNameGender = styled.div`
	font-size: 0.8em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
`;

const StyledEditDelete = styled.div`
	display: flex;
	gap: 10px;
	opacity: 0;
	transition: opacity 0.35s ease;

	&:hover {
		opacity: 1;
	}

	button {
		background-color: #2563eb;
		color: #f3f4f6;
		font-size: 0.8em;
		border: none;
		outline: none;
		border-radius: 5px;
		padding: 0.3em 0.7em;
	}

	button:hover {
		cursor: pointer;
	}
`;

const StyledCardDescription = styled.p`
	font-size: 0.9em;
`;
