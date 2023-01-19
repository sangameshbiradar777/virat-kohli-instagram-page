import "./ReelsGrid.css";
import { reelsEndpoint } from "../../config";
import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Loader from "../Loader";
import Error from "../Error";

const ReelsGrid = () => {
  const MAX_REELS_COUNT = 12;
  const [reels, setReels] = useState([]);
  const [error, setError] = useState({});
  const [currentReelsCount, setCurrentReelsCount] = useState(0);
  const lazyLoadRef = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    console.log(target);
    if (target.isIntersecting) {
      setCurrentReelsCount(
        (prevReelsCount) => prevReelsCount + MAX_REELS_COUNT
      );
    }
  }, []);

  useEffect(() => {
    const lazyLoadElement = lazyLoadRef.current;
    const observer = new IntersectionObserver(handleObserver);

    if (lazyLoadElement) {
      observer.observe(lazyLoadElement);
    }

    return () => observer.unobserve(lazyLoadElement);
  }, [handleObserver]);

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

  const reelsGridItems = currentReels.map((reel) => (
    <div key={reel.id} className="reels-grid__item">
      <img src={reel.url} alt={reel.title} />
    </div>
  ));

  return  error.message ? (
    <Error />
  ) : (
    <>
      <div className="reels-grid">
        <div className="content content--reels-grid">{reelsGridItems}</div>
      </div>
      <div ref={lazyLoadRef}>
        <Loader />
      </div>
    </>
  );
};

export default ReelsGrid;
