import "./Tabs.css";

const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => {
        const className = `btn btn-tab ${
          tab.name === currentTab ? "btn-tab--active" : ""
        }`;
        const Icon = tab.icon;
        return (
          <button key={tab.name} className={className} onClick={() => setCurrentTab(tab.name)}>
            <Icon /> {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
