import "./ReelsGrid.css";
import { reelsEndpoint } from "../../config";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const ReelsGrid = () => {
  const MAX_REELS_COUNT = 12;
  const [reels, setReels] = useState([]);
  const [error, setError] = useState({});
  const [currentReelsCount, setCurrentReelsCount] = useState(MAX_REELS_COUNT);
  const reelsRef = useRef();

  const reelsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry);
    })
  })

  

  const currentReels = reels.slice(0, currentReelsCount);

  useEffect(() => {
    (async () => {
      try {
        const reelsResponse = await axios.get(reelsEndpoint);
        const reels = reelsResponse.data;
        setReels(reels);
      } catch (error) {
        console.error(error.message);
        setError(error);
      }
    })();
  }, []);

  console.log(reels);

  const reelsGridItems = currentReels.map((reel) => (
    <div key={reel.id} className="reels-grid__item">
      <img src={reel.url} alt={reel.title} />
    </div>
  ));

  return (
    <div ref={reelsRef} className="reels-grid">
      <div className="content content--reels-grid">{reelsGridItems}</div>
    </div>
  );
};

export default ReelsGrid;
