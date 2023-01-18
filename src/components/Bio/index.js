import './Bio.css';

const Bio = ({user}) => (
  <div className="bio">
    <span className="bio__text bio__text--username">{user.username}</span>
    <a href={`mailto:${user.email}`} className="bio__text bio__text--email">{user.email}</a>
    <a href={user.website} className="bio__text bio__text--website">{user.website}</a>
  </div>
);

export default Bio;