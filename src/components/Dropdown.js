import React from "react";
import styled from "styled-components";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const renderedDropdown = options.map((option) => {
		return (
			<option value={option.value} key={option.value}>
				{option.title}
			</option>
		);
	});
	return (
		<React.Fragment>
			<StyledDropdownLabel htmlFor={label}>{label}</StyledDropdownLabel>
			<StyledDropdownSelect
				key={options.value}
				value={selected}
				onChange={(e) => onSelectedChange(e.target.value)}
			>
				{renderedDropdown}
			</StyledDropdownSelect>
		</React.Fragment>
	);
};

export default Dropdown;

const StyledDropdownLabel = styled.label`
	display: block;
	color: #121212;
	font-size: 1em;
	font-weight: 400;
	margin: 10px 0px;
`;

const StyledDropdownSelect = styled.select`
	background-color: #dedfe3;
	color: #111827;
	font-size: 1em;
	display: block;
	border: none;
	border-radius: 3px;
	padding: 10px;
	width: 100%;

	option {
		color: #121212;
	}
`;