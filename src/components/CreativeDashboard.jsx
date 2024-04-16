/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from "axios"
import '../styles/creativeDashboard.css';
import Sidebar from './Sidebar';
import CardCom from './CardCom';

const CreativeDashboard = () => {
  const [rangeval, setRangeval] = useState(0);
  const [dataFromChild, setDataFromChild] = useState("");
  const [colorsData, setColorsData] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false); 
  const [disabled, setDisabled] = useState(false)
  const [cards, setCards] = useState([]);
  // to filter card on basis of title and subtitle
  const [filteredCards, setFilteredCards] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const handleSidebarToggle = () => {
    // Toggle sidebar visibility state
    setSidebarVisible(!isSidebarVisible); 
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

  const handleFilterInput = (event) => {
    // Get the input value and convert to lowercase
    const inputValue = event.target.value.toLowerCase(); 
    const filteredCards = cards.filter(
      (card) =>
      // Check if title includes input value
        card.title.toLowerCase().includes(inputValue) || 
        // Check if subtitle includes input value
        card.subtitle.toLowerCase().includes(inputValue) 
    );
    setFilteredCards(filteredCards); // Update the state with filtered cards
  };

  const getColors = async () => {
    try {
      const response = await axios.get(
        "https://random-flat-colors.vercel.app/api/random?count=5"
      );
      setColorsData(response.data.colors);
    } catch (error) {
      console.log("Error fetching colors:", error);
    }
  };

  useEffect(() => {
    setRangeval(cards.length);
    getColors();
  }, [cards]);



  return (
    <div>
      {/* Conditionally render the Sidebar component based on the state */}
      {isSidebarVisible ? (
        <Sidebar
          onCloseSidebar={handleSidebarToggle}
          sendDataToParent={handleDataFromChild}
        />
      ) : null}

      <div className="topHead">
        <h2>Filter By</h2>
      </div>
      <div className="wrapper">
        <div className="colors">
          <h3>color:</h3>
          <div className="clrDiv">
            {colorsData.map((color, index) => (
              <div
                key={index}
                className="clrBox"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
        <div className="titleAndsubtitle">
          <label htmlFor="title">title/subtitle:</label>
          <br />
          <input
            type="text"
            value={filterValue}
            placeholder="search across title and subtitle"
            onChange={(event) => {
              setFilterValue(event.target.value);
              handleFilterInput(event);
            }}
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
        <span className="range-text">{rangeval} / 5 Creatives</span>
      </div>
      <div className="btnContainer">
        <button
          onClick={() => handleSidebarToggle()}
          disabled={isSidebarVisible}
        >
          +Add Creative
        </button>
      </div>
      <div>
        {filterValue !== "" // Check if there is a filter value
          ? filteredCards.map((card, index) => (
              <CardCom key={index} dataFromChild={card} />
            ))
          : cards.map((card, index) => (
              <CardCom key={index} dataFromChild={card} />
            ))}
      </div>
    </div>
  );
}

export default CreativeDashboard