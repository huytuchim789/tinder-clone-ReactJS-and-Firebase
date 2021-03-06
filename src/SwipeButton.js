import React from "react";
import PropTypes from "prop-types";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

SwipeButton.propTypes = {};

function SwipeButton(props) {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButton__repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButton__left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButton__right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="swipeButton__lightning">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButton;
