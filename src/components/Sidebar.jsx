import { useEffect, useState } from 'react';
import '../styles/sidebar.css'
import axios from "axios"

const Sidebar = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColors] = useState("");
    const [isFormValid, setFormValid] = useState(false);
    // State to control sidebar visibility
    const [isSidebarVisible, setSidebarVisible] = useState(true); 
    // State to store form data
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        fetchColors()
    }, [])

    const fetchColors = async () => {
      try {
        const response = await axios.get(
          "https://random-flat-colors.vercel.app/api/random?count=5"
        );
        // console.log(response.data.colors);
        setColors(response.data.colors);
      } catch (error) {
        console.log("Error fetching colors:", error);
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (title && subtitle && selectedColor) {
        setFormData({ title, subtitle, color: selectedColor });
      }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if(name === 'title'){
            setTitle(value);
        }else if(name === 'subtitle'){
            setSubtitle(value);
        }
        // Check if all required fields are filled
        setFormValid(title && subtitle && selectedColor);
      }

    const handleColorChange = (e) => {
        setSelectedColors(e.target.value);
        setFormValid(title && subtitle && e.target.value);
    }

    const handleSidebarToggle = () => {
        setSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility state
    };

  return (
    isSidebarVisible && (
      <div className="sidebar">
        <div className="inpContainer">
          <div className="headerCon">
            <h2>Creative Creation</h2>
            <h3 onClick={handleSidebarToggle}>X</h3>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="title-con">
              <label htmlFor="title">title</label>
              <br />
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                required
                placeholder="This is is title"
              />
            </div>
            <div className="subtitle-con">
              <label htmlFor="subTitle">subtitle</label>
              <br />
              <input
                id="subTitle"
                type="text"
                name="subtitle"
                value={subtitle}
                onChange={handleInputChange}
                required
                placeholder="This is is subtitle"
              />
              <br />
            </div>
            <h3 className="bg-colors">background color</h3>
            <select
              id="bg-color"
              value={selectedColor}
              onChange={handleColorChange}
              required
            >
              <option value="">Select color</option>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
            <div className="btnContainer">
              <button type="submit" disabled={!isFormValid}>
                Done
              </button>
            </div>
          </form>
        </div>
        {/* Conditionally render container div if form data exists */}
        {formData && (
          <div
            className="container"
            style={{ backgroundColor: formData.color }}
          >
            <h2>{formData.title}</h2>
            <h3>{formData.subtitle}</h3>
          </div>
        )}
      </div>
    )
  );
}

export default Sidebar