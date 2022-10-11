import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";
import HomeView from "../views/home.view";
import LinkView from "../views/link.view";

function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Switch>
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component*/}
		<Route exact path="/" component={HomeView} />
			
		{/* This route is for about component
		with exact path "/about", in component
		props we passes the imported component*/}
		<Route path="/links" component={LinkView} />

		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;
