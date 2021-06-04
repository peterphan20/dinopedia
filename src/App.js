import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import DinoCreation from "./components/DinoCreation";

const App = () => {
	return (
		<DinopediaContainer>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<MainPage />
					</Route>
					<Route path="/create-dino" component={DinoCreation} />
				</Switch>
			</Router>
		</DinopediaContainer>
	);
};

export default App;

const DinopediaContainer = styled.div``;
