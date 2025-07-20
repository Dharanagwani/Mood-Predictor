import React, { useState } from 'react'
import moodData, { predictMood } from './utils/moodUtils';
import MoodBox from './components/MoodBox';
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState('');
  const [mood,setMood] = useState(null);
  const [recommendation, setRecommendation] = useState("")
  const [quote,setQuote] = useState("");
  const [bgcolor,setBgcolor] = useState("#dfe6e9");
  
  const handlePredict = () => {
    const detectedMood = predictMood(inputText);
    setMood(detectedMood);
    setInputText('');
    const moodInfo = moodData[detectedMood];
    setRecommendation(moodInfo.recommendation);
    setQuote(moodInfo.quote);
    setBgcolor(moodInfo.background);
  }
  const resetMood = () => {
    setMood("");
    setInputText("");
    setBgcolor("#dfe6e9");
  }
  return (
    <div className='container'style={{backgroundColor: bgcolor, minHeight:'100vh', padding:'20px'}}>
      <h1>Mood Predictor</h1>
      <label htmlFor='mood-text'>How was your day today?</label>
      <textarea id="mood-text" rows={5} value={inputText}
      placeholder='You can write anything about your day...'
      onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={handlePredict}>Predict Mood</button>
      {mood && <MoodBox mood={mood} data={moodData[mood]}/>}
      {mood && (
        <button className='reset' onClick={resetMood}>Reset</button>
      )}
    </div>
  )
}

export default App