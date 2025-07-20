import React from 'react'
import './MoodBox.css'
const MoodBox = ({mood,data}) => {
  return (
    <div className='mood-box'>
        <h2>You're feeling <span>{mood}</span></h2>
        <p className='emoji'>{data.emoji}</p>
        <p className='data'><strong>Recommendation: </strong>{data.recommendation}</p>
        <p className='data'><strong>Quote: </strong>{data.quote}</p>
    </div>
  )
}

export default MoodBox