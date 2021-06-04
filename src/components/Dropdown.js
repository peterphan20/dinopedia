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
			<StyledSelect
				key={options.value}
				value={selected}
				onChange={(e) => onSelectedChange(e.target.value)}
			>
				{renderedDropdown}
			</StyledSelect>
		</React.Fragment>
	);
};

export default Dropdown;

const StyledDropdownLabel = styled.label``;
const StyledSelect = styled.select``;
