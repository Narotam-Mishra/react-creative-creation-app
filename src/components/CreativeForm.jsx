import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"

const CreativeForm = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColors] = useState('');
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    fetchColors();
  },[]);

  const fetchColors = async () => {
    try {
      const response = await axios.get('https://random-flat-colors.vercel.app/api/random?count=5');
      console.log(response.data.colors);
      setColors(response.data.colors);
    } catch (error) {
        console.log('Error fetching colors:', error);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(title && subtitle && selectedColor){
        onsubmit({ title, subtitle, color: selectedColor });
    }
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if(name === 'title'){
        setTitle(value);
    }else if(name === 'subtitle'){
        setSubtitle(value);
    }
    setFormValid(title && subtitle && selectedColor);
  }

  const handleColorChange = (e) => {
    setSelectedColors(e.target.value);
    setFormValid(title && subtitle && e.target.value);
  }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" value={title} onChange={handleInputChange} required />
            <label htmlFor="subtitle">Subtitle:</label>
            <input id="subtitle" type="text" name="subtitle" value={subtitle} onChange={handleInputChange} required />
            <label htmlFor="bg-color">Background Color:</label>
            <select id="bg-color" value={selectedColor} onChange={handleColorChange} required >
                <option value="">Select color</option>
                {
                    colors.map((color, index) => (
                        <option key={index} value={color}>{color}</option>
                    ))
                }
            </select>
            <button type="submit" disabled={isFormValid}>Done</button>
        </form>
    </div>
  )
}

export default CreativeForm