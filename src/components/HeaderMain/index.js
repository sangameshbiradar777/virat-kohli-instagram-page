import './HeaderMain.css';

const HeaderMain = ({user}) => (
  <div className="header__main">
    <div className="header__main__name">
      <h1>{user.name?.toLowerCase()}</h1>
      <span className="material-symbols-outlined">verified</span>
    </div>
    <div className="header__main__actions">
      <button className="btn btn--tertiary">Follow</button>
      <button className="btn btn--tertiary">Message</button>
      <div className="header__main__more">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  </div>
);

export default HeaderMain;