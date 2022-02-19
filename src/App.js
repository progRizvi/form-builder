import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormGenerator from "./components/FormGenerator/FormGenerator";
import FormMake from "./components/FormMake/FormMake";
import FormView from "./components/FormView/FormView";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
	return (
		<div className="">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/generate-form" element={<FormGenerator />} />
					<Route path="/form-make/:formId" element={<FormMake />} />
					<Route path="/form-view/:formId" element={<FormView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
