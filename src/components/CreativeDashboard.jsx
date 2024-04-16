/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../styles/creativeDashboard.css';
import Sidebar from './Sidebar';
import CardCom from './CardCom';

const CreativeDashboard = () => {
  const [rangeval, setRangeval] = useState(0);
  const [dataFromChild, setDataFromChild] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false); 
  const [disabled, setDisabled] = useState(false)
  const [cards, setCards] = useState([]);
  
  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility state
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // setCards([...cards, data]);
    if (cards.length < 5) {
    setDataFromChild(data);
    setCards([...cards, data]);
  } else {
    alert("You can only add up to 5 cards.");
  }
  }

  useEffect(() => {
    setRangeval(cards.length);
  }, [cards]);



  return (
    <div>
      {/* Conditionally render the Sidebar component based on the state */}
      {isSidebarVisible ? <Sidebar onCloseSidebar={handleSidebarToggle} sendDataToParent={handleDataFromChild} /> : null}

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
          value={rangeval}
          min="0"
          max="5"
          onChange={(event) => setRangeval(event.target.value)}
        />
        <span className='range-text'>{rangeval} / 5 Creatives</span>
      </div>
      <div className="btnContainer">
        <button onClick={() => handleSidebarToggle()} disabled={isSidebarVisible}>+Add Creative</button>
      </div>
      <div>
        {cards.map((card, index) => (
          <CardCom key={index} dataFromChild={card} />
        ))}
      </div>
    </div>
  );
}

export default CreativeDashboard