import AppBarComponent from "../components/AppBar";
import FooterPage from "../pages/footer-page";
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
        <FooterPage />
    </div>
  );
}

export default HomeView;