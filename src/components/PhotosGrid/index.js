import "./PhotosGrid.css";
import { photosEndpoint } from "../../config";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader";
import Error from "../Error";

const PhotosGrid = ({ user }) => {
  const MAX_PHOTOS_COUNT = 12;
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [currentPhotosCount, setCurrentPhotosCount] =
    useState(MAX_PHOTOS_COUNT);

  const currentPhotos = photos.slice(0, currentPhotosCount);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const photosResponse = await axios.get(photosEndpoint);
        const photos = photosResponse.data;
        setPhotos(photos);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleOnShowMorePosts = () => {
    setCurrentPhotosCount(
      (prevPhotosCount) => prevPhotosCount + MAX_PHOTOS_COUNT
    );
  };

  const photosGridItems = currentPhotos.map((photo) => (
    <div key={photo.id} className="photos-grid__item">
      <img src={photo.url} alt={photo.title} />
    </div>
  ));

  return isLoading ? (
    <Loader />
  ) : error.message ? (
    <Error error={error} />
  ) : (
    <div className="photos-grid">
      <div className="content content--photos-grid">
        {photosGridItems}
        {!!photosGridItems.length && (
          <div className="photos-grid__action">
            <button
              className="btn btn--primary"
              onClick={handleOnShowMorePosts}
            >
              Show more posts from {user.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotosGrid;
