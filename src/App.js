import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import DinoCreation from "./components/DinoCreation";
import EditDino from "./components/EditDino";

const App = () => {
	const [currentSelectedMember, setCurrentSelectedMember] = useState({});

	return (
		<DinopediaContainer>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<MainPage setCurrentSelectedMember={setCurrentSelectedMember} />
					</Route>
					<Route path="/create-dino" component={DinoCreation} />
					<Route path="/edit-dino">
						<EditDino currentSelectedMember={currentSelectedMember} />
					</Route>
				</Switch>
			</Router>
		</DinopediaContainer>
	);
};

export default App;

const DinopediaContainer = styled.div``;
