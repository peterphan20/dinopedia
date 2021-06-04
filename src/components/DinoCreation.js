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
				<div>
					<label htmlFor="dinoName">Name</label>
					<input
						type="text"
						id="dinoName"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="dinoSpecies">Dinosaur Species</label>
					<input
						type="text"
						id="dinoSpecies"
						placeholder="Species"
						value={species}
						onChange={(e) => setSpecies(e.target.value)}
					/>
				</div>
				<Dropdown
					selected={gender}
					options={dinoGender}
					onSelectedChange={setGender}
					label="Gender"
				/>
				<div>
					<label htmlFor="dinoDescription">Description</label>
					<input
						type="text"
						id="dinoDescription"
						placeholder="200 character limit"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<button onClick={onAddSubmit}>Submit</button>
			</StyledCreationForm>
		</StyledCreationContainer>
	);
};

export default DinoCreation;

const StyledCreationContainer = styled.div``;

const StyledCreationForm = styled.div``;
