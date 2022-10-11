import AppBarComponent from "../components/AppBar";
import HomePage from "../pages/home-page";
import LinksPage from "../pages/links-page";

function LinkView() {
  return (
      <div className="App">
        <AppBarComponent />
        <LinksPage />
    </div>
  );
}

export default LinkView;