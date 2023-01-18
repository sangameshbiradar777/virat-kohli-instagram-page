import "./Main.css";
import PhotosGrid from "../PhotosGrid";
import ReelsGrid from "../ReelsGrid";
import TaggedGrid from "../TaggedGrid";
import { useState } from "react";
import Tabs from "../Tabs";
import PostsSVG from "../../assets/svg/Posts";
import ReelsSVG from "../../assets/svg/Reels";
import TaggedSVG from "../../assets/svg/Tagged";

const Main = ({ user }) => {
  const [currentTab, setCurrentTab] = useState("posts");

  const tabs = [{ name: 'posts', icon: PostsSVG }, { name: 'reels', icon: ReelsSVG }, { name: 'tagged', icon: TaggedSVG }];

  let mainElement;

  if (currentTab === "posts") {
    mainElement = <PhotosGrid user={user} />;
  } else if (currentTab === "reels") {
    mainElement = <ReelsGrid />;
  } else {
    mainElement = <TaggedGrid />;
  }

  return (
    <main className="main">
      <div className="content content--main">
        <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {mainElement}
      </div>
    </main>
  );
};

export default Main;
