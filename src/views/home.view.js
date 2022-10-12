import AppBarComponent from "../components/AppBar";
import { HomePage } from "../pages/home-page";

function HomeView() {
  return (
    <div className="App">      
    <header>
      <AppBarComponent />
      </header>
        <div>
        <HomePage />
        </div>
    </div>
  );
}

export default HomeView;