import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./components/AddCourse/AddCourse";


function App() {

	return (
		<>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route path="/add-courses" element={<AddCourse />} />
			</Routes>
		</Router>
		</>
	);
}

export default App;
