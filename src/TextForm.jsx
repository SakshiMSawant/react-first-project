// src/TextForm.js
import React, { useState } from 'react';

function TextForm() {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleToUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleToLowercase = () => {
    setText(text.toLowerCase());
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div>
      <h2>Text Tutorials</h2>
      <textarea value={text} onChange={handleOnChange} rows="10" cols="50" />
      <div>
        <button onClick={handleToUppercase}>Convert to UPPERCASE</button>
        <button onClick={handleToLowercase}>Convert to lowercase</button>
      </div>
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default TextForm;
