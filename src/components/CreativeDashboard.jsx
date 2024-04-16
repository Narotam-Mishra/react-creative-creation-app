import { useState } from 'react';
import '../styles/creativeDashboard.css';
import Sidebar from './Sidebar';

const CreativeDashboard = () => {
  const [rangeval, setRangeval] = useState(0);
  // State to track sidebar display
  const [isSidebarDisplayed, setSidebarDisplayed] = useState(false); 

  const handleAddCreative = () => {
    setSidebarDisplayed(true); // Display the sidebar when Add Creative button is clicked
  };
  
  return (
    <div>
      {/* Conditionally render the Sidebar component based on the state */}
      {isSidebarDisplayed ? <Sidebar /> : null}

      <div className="topHead">
        <h2>Filter By</h2>
      </div>
      <div className="wrapper">
        <div className="colors">
          <h3>color:</h3>
          <div className="clrDiv">
            <div id="clr1" className="clrBox"></div>
            <div id="clr2" className="clrBox"></div>
            <div id="clr3" className="clrBox"></div>
            <div id="clr4" className="clrBox"></div>
            <div id="clr5" className="clrBox"></div>
            <div id="clr6" className="clrBox"></div>
          </div>
        </div>
        <div className="titleAndsubtitle">
          <label htmlFor="title">title/subtitle:</label>
          <br />
          <input
            type="text"
            placeholder="search across title and subtitle"
            disabled={true}
          />
        </div>
      </div>
      <div className="rangCon">
        <input
          type="range"
          className="custom-range"
          defaultValue={rangeval}
          min="0"
          max="5"
          onChange={(event) => setRangeval(event.target.value)}
        />
        <span className='range-text'>0 / 5 Creatives</span>
      </div>
      <div className="btnContainer">
        <button onClick={handleAddCreative} disabled={isSidebarDisplayed}>+Add Creative</button>
      </div>
    </div>
  );
}

export default CreativeDashboard