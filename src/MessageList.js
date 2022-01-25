import React from 'react';

const MessageList = ({ data }) => {
  return (
    <div>
      {data.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </div>
  );
};

export default MessageList;
