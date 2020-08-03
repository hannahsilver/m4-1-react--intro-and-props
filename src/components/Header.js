import React from "react";

import "./Header.css";

const Header = (props) => {
  const currentFriends = props.participants.filter((participant) => {
    return participant.username !== props.user.username;
  });
  const renderedFriends = currentFriends.map((participant) => {
    return (
      <div className="header-div">
        <img className="avatar" src={participant.avatar}></img>
        <p className="header-username">{participant.username}</p>
      </div>
    );
  });
  return <header>{renderedFriends}</header>;
};

export default Header;
