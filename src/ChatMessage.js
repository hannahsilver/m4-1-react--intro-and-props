import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props.messageType);
  if (props.messageType === "sent") {
    return (
      <div className="sent-message">
        <div className="body">{props.body}</div>
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <img className="avatar" src={props.avatar}></img>
        <div>
          <div className="user">{props.user}</div>
          <div className="body">{props.body}</div>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
