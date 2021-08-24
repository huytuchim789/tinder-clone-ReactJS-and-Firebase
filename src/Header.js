import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
Header.propTypes = {};

function Header(props) {
  const { backButton } = props;
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => {
            history.replace(backButton);
          }}
        >
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src="/logo.svg" alt="tinder_logo"></img>
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
