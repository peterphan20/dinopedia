import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

const App = () => {
	return (
		<DinopediaContainer>
			<Navbar />
			<MainPage />
		</DinopediaContainer>
	);
};

export default App;

const DinopediaContainer = styled.div``;
