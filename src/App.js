import React, { useState } from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);

  /**
   * @desc When onsend is called, add the new message to the messages array.
   * @param newMessage - A string containing the new message.
   */
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
};

export default App;
