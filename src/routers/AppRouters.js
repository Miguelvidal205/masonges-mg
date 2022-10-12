// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";
import LinkView from "../views/link.view.js";
import HomeView from "../views/home.view.js";
import PhotosView from "../views/photos.view.js";


const AppRouters = () => {
return (
		<Router >
			<Switch>
				<Route 
					exact 
					path='/homepage'
					component={HomeView} 
				/>
				<Route 
					path='/links'
					component={LinkView} 
				/>
				<Route 
					path='/photos'
					component={PhotosView} 
				/>
				<Redirect to="/homepage" />
			</Switch>
		</Router>
		);
}

export default AppRouters;
