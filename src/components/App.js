import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import GlobalStyle from "../layouts/GlobalStyle";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Today from "../pages/Today";
import Habits from "../pages/Habits";

export default function App() {
	const [user, setUser] = useState("");

	return (
		<>
			<UserContext.Provider value={{user, setUser}}>
				<BrowserRouter>
					<GlobalStyle />
					<Switch>
						<Route path="/" exact>
							<Login />
						</Route>
						<Route path="/signup" exact>
							<SignUp />
						</Route>
						<Route path="/today" exact>
							<Today />
						</Route>
						<Route path="/habits" exact>
							<Habits />
						</Route>
					</Switch>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}