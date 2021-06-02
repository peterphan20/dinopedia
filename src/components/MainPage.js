import React from "react";
import styled from "styled-components";

const MainPage = () => {
	return (
		<StyledMainPageContainer>
			<StyledListContainer>
				<StyledSearchbar>
					<input type="text" className="dino-search" placeholder="Search" />
				</StyledSearchbar>
				<StyledCardContainer>
					<StyledDinoCard>hello</StyledDinoCard>
					<StyledDinoCard>there</StyledDinoCard>
					<StyledDinoCard>butt</StyledDinoCard>
					<StyledDinoCard>butt</StyledDinoCard>
					<StyledDinoCard>butt</StyledDinoCard>
					<StyledDinoCard>butt</StyledDinoCard>
					<StyledDinoCard>butt</StyledDinoCard>
				</StyledCardContainer>
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

const StyledCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin: 0 auto;
`;

const StyledDinoCard = styled.div`
	background-color: #1d4ed8;
	width: 350px;
	height: 200px;
	border: 1px solid black;
`;
