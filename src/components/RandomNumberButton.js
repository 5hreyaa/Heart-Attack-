
import React, { useState, useRef } from 'react';
import '../style.css'; // Import your styles

const RandomNumberButton = () => {
  const [question, setQuestion] = useState("Do you love me?");
  const [gifSrc, setGifSrc] = useState("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif");
  
  const noBtnRef = useRef(null); 
  const wrapperRef = useRef(null); 

  const handleYesClick = () => {
    setQuestion("no escape now! you are mine");
    setGifSrc("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmxkcHZrZmxxZHh4dG90aWN1cTA4aHZ4Znd5NTVuZW13c2V5dncxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.webp");
  };

  const handleNoHover = () => {
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const noBtnRect = noBtnRef.current.getBoundingClientRect();

    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtnRef.current.style.position = 'absolute';
    noBtnRef.current.style.left = `${randomX}px`;
    noBtnRef.current.style.top = `${randomY}px`;
  };

  return (
    <div className="wrapper" ref={wrapperRef}>
      <h2 className="question">{question}</h2>
      <img className="gif" alt="gif" src={gifSrc} />
      <div className="btn-group">
        <button className="yes-btn" onClick={handleYesClick}>Yes</button>
        <button 
          className="no-btn" 
          ref={noBtnRef} 
          onMouseOver={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default RandomNumberButton;
