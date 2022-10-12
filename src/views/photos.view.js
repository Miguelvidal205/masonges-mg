import AppBarComponent from "../components/AppBar";
import PhotosPage from "../pages/photos-page";

function PhotosView() {
  return (
    <div className="App">      
    <header>
      <AppBarComponent />
      </header>
        <div>
        <PhotosPage />
        </div>
    </div>
  );
}

export default PhotosView;