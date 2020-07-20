import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message">
      <img className="avatar" src={props.avatar}></img>
      <div>
        <div className="user">{props.user}</div>
        <div className="body">{props.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
