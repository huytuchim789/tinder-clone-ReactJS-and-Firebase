import { React, useState } from "react";
import PropTypes from "prop-types";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

ChatScreen.propTypes = {};

function ChatScreen(props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      name: "Ellen",
      image:
        "https://thumbs.dreamstime.com/b/professional-photo-session-beautiful-sexy-european-woman-desert-197434165.jpg",
      message: "What's up💓",
    },
    {
      name: "Ellen",
      image:
        "https://thumbs.dreamstime.com/b/professional-photo-session-beautiful-sexy-european-woman-desert-197434165.jpg",
      message: "What's up💓",
    },
    {
      message: "How is it going",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED HELLEN ON 21/8/2012</p>
      {message.map((message) => {
        return message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        );
      })}
      <div>
        <div>
          <form className="chatScreen__input">
            <input
              value={input}
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Type a message..."
              className="chatScreen__inputField"
            />
            <button
              onClick={handleSend}
              type="submit"
              className="chatScreen__inputButton"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
