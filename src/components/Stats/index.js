import './Stats.css';

const Stats = () => (
  <div className="stats">
    <span className="stats__text">
      <strong className="stats__text__strong">1,501</strong>{" "}
      posts
    </span>
    <span className="stats__text">
      <strong className="stats__text__strong">232M</strong>{" "}
      followers
    </span>
    <span className="stats__text">
      <strong className="stats__text__strong">262</strong>{" "}
      following
    </span>
  </div>
);

export default Stats;