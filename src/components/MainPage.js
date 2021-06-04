import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DinoCard from "./DinoCard";
import { getAllDinos, deleteDino } from "../helpers/crudMembers";

const MainPage = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	console.log(results);

	useEffect(() => {
		getAllDinos(setResults);
	}, []);

	const handleDeleteDino = (dinoID) => {
		console.log(dinoID);
		const idArr = [...results].filter((dino) => {
			console.log(dino.id);
			return Number(dino.id) !== Number(dinoID);
		});
		setResults(idArr);
		deleteDino(dinoID);
	};

	return (
		<StyledMainPageContainer>
			<StyledListContainer>
				<StyledSearchbar>
					<input
						type="text"
						className="dino-search"
						placeholder="Search"
						term={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</StyledSearchbar>
				<DinoCard
					results={results}
					term={term}
					setResults={setResults}
					handleDeleteDino={handleDeleteDino}
				/>
			</StyledListContainer>
		</StyledMainPageContainer>
	);
};

export default MainPage;

const StyledMainPageContainer = styled.div`
	background-color: #f3f4f6;
`;
const StyledListContainer = styled.div`
	background-color: #e5e7eb;
	margin-left: auto;
	margin-right: auto;
	padding: 100px 0px 50px 0px;
	width: 100em;
	height: 100%;
	min-height: 100vh;
`;

const StyledSearchbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2.5em;
	width: 100%;

	input {
		background-color: #d1d5db;
		color: #36454f;
		font-size: 1em;
		border: none;
		outline: none;
		border-radius: 6px;
		padding: 10px 20px;
		width: 20em;
	}
`;
