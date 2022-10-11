import AppBarComponent from "../components/AppBar";
import HomePage from "../pages/home-page";

function HomeView() {
  return (
    <div className="App">
      <AppBarComponent />
        <HomePage />
    </div>
  );
}

export default HomeView;