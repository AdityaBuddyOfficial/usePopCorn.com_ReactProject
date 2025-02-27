import React, { useState } from 'react'
import Start from './Start';

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",

};

//   color="#fcc419",size=48
const StartRating = (
  { maxRating = 5,
    color = "#fcc419",
    size = 48,
    message = [],
    defaultRating = 0,
    onSetRating }

    : any) => {
  console.log("🚀 ~ StartRating ~ message:", message)
  const [rating, setRating] = useState(defaultRating)
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating:any) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Start key={i} onRate={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size} 
            onRate={() => handleRating(i + 1)}/>))}

      </div>
      <p style={textStyle}>{message.length === maxRating ? message[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}</p>
    </div>

  )
}


export default StartRating
