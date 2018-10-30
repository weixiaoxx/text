import React from "react";
import {render}from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router,Link,Route } from "react-router-dom";

render(
	<Router>
		<Route path="/" component={App}/>
	</Router>,
    document.getElementById("app-container")
)