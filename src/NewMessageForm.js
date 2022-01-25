import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  /**
   * @desc Updates the input text state when the user types.
   * @param {Event} event
   */
  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  /**
   * @desc Calls onsend from parent (App.js) and resets the input text.
   */
  const handleSend = () => {
    onSend(inputText);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
