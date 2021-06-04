import React, { useState } from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

import { putDino } from "../helpers/crudMembers";
import { dinoGender } from "../helpers/dinoDescription";

const EditDino = ({ currentSelectedMember }) => {
	const { dinoID } = currentSelectedMember;

	const [editName, setEditName] = useState("");
	const [editSpecies, setEditSpecies] = useState("");
	const [editGender, setEditGender] = useState(dinoGender[0]);
	const [editDescription, setEditDescription] = useState("");

	const onEditSubmit = async () => {
    // This is the body for my PUT request
		const dinoObj = {
			editName,
			editSpecies,
			editGender,
			editDescription,
		};
		putDino(dinoID, dinoObj);
	};

	return (
		<StyledEditContainer>
			<StyledEditForm>
				<h1>Edit Dinosaur</h1>
				<StyledLabel htmlFor="editDinoName">Name</StyledLabel>
				<StyledTextInputField
					type="text"
					id="editDinoName"
					placeholder="Name"
					value={editName}
					onChange={(e) => setEditName(e.target.value)}
				/>
				<StyledLabel htmlFor="editDinoSpecies">Species</StyledLabel>
				<StyledTextInputField
					type="text"
					id="editDinoSpecies"
					placeholder="Species"
					value={editSpecies}
					onChange={(e) => setEditSpecies(e.target.value)}
				/>
				<Dropdown
					selected={editGender}
					options={dinoGender}
					onSelectedChange={(e) => setEditGender(e.target.value)}
					StyledLabel="Gender"
				/>
				<StyledLabel htmlFor="editDinoDescription">Description</StyledLabel>
				<StyledEditDescription
					type="text"
					id="editDinoDescription"
					placeholder="200 character limit"
					value={editDescription}
					onChange={(e) => setEditDescription(e.target.value)}
				/>
				<StyledSubmitButton onClick={onEditSubmit}>Edit Dinosaur</StyledSubmitButton>
			</StyledEditForm>
		</StyledEditContainer>
	);
};

export default EditDino;

const StyledEditContainer = styled.div`
	background-color: #e5e7eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 300px 0px;
	height: 100vh;
	width: 100%;
`;

const StyledEditForm = styled.div`
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

const StyledEditDescription = styled.textarea`
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
