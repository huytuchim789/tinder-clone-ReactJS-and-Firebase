import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import "./chats.css";
import { Link, useHistory } from "react-router-dom";

Chat.propTypes = {};

function Chat({ name, message, profilePic, timestamp }) {
  console.log(profilePic);
  return (
    <Link to={`chats/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt="image" src={profilePic}></Avatar>
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
