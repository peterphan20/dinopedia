import React, { useState } from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

import { createDino } from "../helpers/crudMembers";
import { dinoGender } from "../helpers/dinoDescription";

const DinoCreation = () => {
	const [name, setName] = useState("");
	const [species, setSpecies] = useState("");
	const [gender, setGender] = useState(dinoGender[0]);
	const [description, setDescription] = useState("");

	const onAddSubmit = async () => {
		const dinoObj = {
			name,
			species,
			gender,
			description,
		};
		const response = await createDino(dinoObj);
		if (response) {
			setName("");
			setSpecies("");
			setGender(dinoGender[0]);
			setDescription("");
		}
	};

	return (
		<StyledCreationContainer>
			<StyledCreationForm>
				<h1>Create Dinosaur</h1>
				<StyledLabel htmlFor="dinoName">Name</StyledLabel>
				<StyledTextInputField
					type="text"
					id="dinoName"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<StyledLabel htmlFor="dinoSpecies">Dinosaur Species</StyledLabel>
				<StyledTextInputField
					type="text"
					id="dinoSpecies"
					placeholder="Species"
					value={species}
					onChange={(e) => setSpecies(e.target.value)}
				/>
				<Dropdown
					selected={gender}
					options={dinoGender}
					onSelectedChange={setGender}
					label="Gender"
				/>
				<StyledLabel htmlFor="dinoDescription">Description</StyledLabel>
				<StyledDinoDescription
					type="text"
					id="dinoDescription"
					placeholder="200 character limit"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<StyledSubmitButton onClick={onAddSubmit}>Submit</StyledSubmitButton>
			</StyledCreationForm>
		</StyledCreationContainer>
	);
};

export default DinoCreation;

const StyledCreationContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100vh;
	width: 100%;
`;

const StyledCreationForm = styled.div`
	background-color: #f3f4f6;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2em 3em;
	height: 50em;
	width: 27em;

	h1 {
		align-self: center;
	}
`;

const StyledLabel = styled.label`
	display: block;
	color: #121212;
	font-size: 1em;
	font-weight: 400;
	margin: 10px 0px;
`;

const StyledTextInputField = styled.input`
	background-color: #dedfe3;
	color: #111827;
	border: none;
	border-radius: 3px;
	padding: 10px;
	width: 100%;

	::placeholder {
		color: #9ca3af;
	}
`;

const StyledDinoDescription = styled.textarea`
	background-color: #dedfe3;
	color: #111827;
	border: none;
	border-radius: 3px;
	padding: 10px 10px 100px 10px;
	width: 100%;
	resize: none;

	::placeholder {
		color: #9ca3af;
	}
`;

const StyledSubmitButton = styled.button`
	background-color: #60a5fa;
	color: #121212;
	border: 1px solid #111827;
	border-radius: 5px;
	padding: 1em;
	margin: 1.5em 0;
	width: 100%;
	cursor: pointer;
`;
